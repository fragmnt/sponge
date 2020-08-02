const {
    Merchant, Order, BillingProfile, Product, Storefront, Session
} = require('../models');

const bcrypt = require('../utils/bcrypt');
const jwt = require('../utils/jwt');
const ses = require('../utils/sessions');
const s3 = require('../utils/s3');

const goose = require('mongoose');
const sid = require('shortid');
const reqIp = require('request-ip');

module.exports = {
    root: (req, reply) => {
        return reply
        .code(200)
        .send({ msg: "Welcome to the Sponge REST API"})
        .header('Content-Type', 'application/json; charset=utf-8');
    },
    middleware: (req, reply, done) => {
        done();
    },
    /**
     * CREATE NEW, LOGIN, REAUTH & RESET MERCHANT ACCOUNT
     */
    register: async (req, reply) => {
        
        // email, username regex validators
        const input = {
            email: req.body.email,
            pswd: req.body.password,
            alias: req.body.username,
            ip: reqIp.getClientIp(req),
            host: req.hostname,
        };
        
        var pswdHash;
        try {
            pswdHash = await bcrypt.hashPassword(input.pswd);
        } catch (err) {
            return reply
            .code(504)
            .send({ err: "Could not hash password" });
        };

        // create user on database
        var m = new Merchant({
            _id: goose.Types.ObjectId(), 
            email: input.email,
            password: pswdHash,
            username: input.alias,
            createdAt: Date.now(),
        });

        try {
            await m.save();
        } catch(err) {
            return reply
            .code(504)
            .send({ err: "Could not create user account. Please try editting your fields and submitting again." });
        }
        // generate sessionId and access/refresh tokens
        var sid = await ses.generate(m._id, input.ip);
        var atok = await jwt.generate(m._id);
        var rtok = await jwt.refresh(atok);

        // create session on database
        var sesh = new Session({
            _id: goose.Types.ObjectId(),
            sessionId: sid.toString(),
            user_id: m._id,
            createdAt: Date.now(),
            ipAddress: input.ip,
            hostName: input.host,
        });
        await sesh.save();

        return reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ 
                session_id: sesh.sessionId,
                tokens: {
                    access: atok,
                    refresh: rtok,
                    // expiresIn
                    // tokenType : Bearer
                },
                user: {
                    id: m._id,
                    email: m.email, 
                    payId: m.payId,
                    username: m.username,
                    createdAt: m.createdAt,
                }
            });
    },
    login: async (req, reply) => {
        const input = {
            email: req.body.email,
            pswd: req.body.password, 
            ip: reqIp.getClientIp(req),
        };
        // find if user exists, validate password hash
        var m = await Merchant.findOne({
            email: input.email
        });

        var isAuthenicated = await bcrypt.checkPassword(input.pswd, m.password);
        if (isAuthenicated === true) {
            // generate sessionId and access tokens

            var sid = await ses.generate(m._id, input.ip).toString();
            var atok = await jwt.generate(m._id);
            var rtok = await jwt.refresh(atok);

            return reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({
                    session_id: sid,
                    tokens: {
                        access: atok,
                        refresh: rtok,
                    },
                    user: {
                        email: m.email, 
                        payId: m.payId,
                        username: m.username,
                    }
                });
        } else {
            return reply 
            .code(401)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ msg: "Could not login user. Incorrect password."})
        };
    },
    resetPassword: (req, reply) => {
        const input = {
            email: req.body.email,
        };
        return reply;
    },
    reauthorize: (req, reply) => {
        // confirm password and get new tokens
    },
    // connect payid, xrp, ilp wallet
    // connect web3

    /**
     * SETTINGS
     */

     // changePassword
     // updateEmail
     // closeAccount
     // logout of other sessions
     // dis::connect payID or configure payment settings
    
    /** 
     * STOREFRONTS
     */
    createStorefront: async (req, reply) => {
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var input = {
            name: req.body.storefrontName,
            alias: req.body.alias,
        };

        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };

        var retrieved = await Merchant.findOne({ _id: authStatus.user });
        var m = {
            id: retrieved._id,
            email: retrieved.email,
            username: retrieved.username,
            createdAt: retrieved.createdAt,
            payId: retrieved.payId
        };

        var sf = new Storefront({
            _id: goose.Types.ObjectId(),
            name: input.name,
            storefrontAliasURL: input.alias,
            merchant_id: m.id,
            createdOn: Date.now(),
        });
        await sf.save();
        // create storefront with input and id
        return reply
        .code(200)
        .send({ storefront: sf });
    },
    getStorefront: async (req, reply) => {
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };

        var retrieved = await Storefront.findOne({ storefrontAliasURL: req.params.alias });
        
        if (!retrieved){
            reply.code(401).send({
                msg: "No store was found."
            });
        } else {
                return reply
            .code(200)
            .send({ storefront: retrieved });
        }
    },
    getAllStorefrontsByMerchant: async (req, reply) => {
       var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };
        var m = await Merchant.findOne({ _id: authStatus.user });
        var sfs = await Storefront.find().where({
            merchant_id: m._id
        });

        return reply
        .code(200)
        .send({ storefronts: sfs });
    },
    // update
    // delete

    /**
     * PRODUCTS
     */
    createNewProduct: async (req, reply) => {
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        // check for input if not return
        var input = {
            name: req.body.name,
            desc: req.body.description,
            price: req.body.price,
            image: req.body.image
            // req.body.value
        }; 
        const shortcut = sid.generate();

        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };

        var m = await Merchant.findOne({ _id: authStatus.user });
        var sf = await Storefront.find().where({ merchant_id: m._id });
        
        // ...use minio utils to upload image buffer input to bucket
        const productImgURL = await s3.uploadProductPhotoFromBuffer(input.image, sf.storefrontAliasURL);
        
        var p = new Product({
            _id: goose.Types.ObjectId(),
            storefront_id: sf[0]._id,
            name: input.name,
            description: input.desc,
            price: input.price,
            imageURL: productImgURL,
            url: shortcut
        });
        await p.save();

        return reply
        .code(200)
        .send({ product: p });
    },
    getAllProductsFromStorefront: async (req, reply) => {
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };

        var retrieved = await Storefront.findOne({ storefrontAliasURL: req.params.alias });
        
        if (!retrieved){
            reply.code(401).send({
                msg: "No products were found."
            });
        } else {
            var ps = await Product.find().where({
                storefront_id: retrieved._id
            });
                return reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ products: ps });
        };
    },
    getProductByURL: async (req, reply) => {
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };
        // get one product by id /product/:url
        var productShortcode = req.params.url;
        var retrieved = await Product.findOne({ url: productShortcode });
        
        if (!retrieved){
            reply.code(401).send({
                msg: "No products were found."
            });
        } else {
                return reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ product: retrieved });
        };
    },
    // update
    // delete

    /**
     * ORDERS, PAYID integration, event dispatch to redis-bull before resp
     */
    createOrder: async () => {
        // after order is created, a payment model is created to process it.
    },
    processOrder: async () => {},
    fulfillOrder: async () => {},
    cancelOrder: async () => {},
    // getAllOrdersFromStorefrontId
    // 
};