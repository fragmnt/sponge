const {
    Merchant, Order, BillingProfile, Product, Storefront, Session, Payment
} = require('../models');

const bcrypt = require('../utils/bcrypt');
const jwt = require('../utils/jwt');
const ses = require('../utils/sessions');
const s3 = require('../utils/s3');

const goose = require('mongoose');
const sid = require('shortid');
const reqIp = require('request-ip');
const crypto = require('crypto-js');

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
    // connect web3/formatic

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
        // RBU: mark as a visit in kv store (redis) for analytics
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
    deleteStorefront: async (req, reply) => {},
    archiveStorefront: async (req, reply) => {},
    backupAndExportStorefront: async (req, reply) => {},
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
        removeProduct: async (req, reply) => {},
        archiveProduct: async (req, reply) => {},

    /**
     * ORDERS, PAYID integration, **event dispatch to redis-bull before resp
     */
    createOrder: async (req, reply) => {
        // **RBU: mark as a purchase in kv store (redis) for analytics
        // after order is created, a payment model is created to process it.
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var input = { 
            //...form.data
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            company: req.body.company,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            postcode: req.body.postcode,
            country: req.body.country, 
            state: req.body.state,    
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
        }; 

        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };

        var m = await Merchant.findOne({ _id: authStatus.user });
        var sf = await Storefront.findOne({ merchant_id: m._id });
        var p = await Product.find({ url: req.params.url }).where({ storefront_id: sf._id });
        p = p[0];
        
        // create order & billing profile from product + input info
        var o = new Order({
            _id: goose.Types.ObjectId(),
            orderNumber: crypto.lib.WordArray.random(6),
            product_id: p._id,
            storefront_id: sf._id,
            customerUrl: sid.generate() + crypto.lib.WordArray.random(12) + sid.generate(),
            totalPrice: p.price,
            paymentMethod: 0,
        });
        var bp = new BillingProfile({
            _id: goose.Types.ObjectId(),
            order_id: o._id,
            paymentMethod: 0,
            firstName: input.firstName,
            lastName: input.lastName,
            company: input.company,
            address1: input.address1,
            address2: input.address2,
            city: input.city,
            postcode: input.postcode,
            country: input.country, 
            state: input.state,    
            email: input.email,
            phoneNumber: input.phoneNumber,
        });
        var pay = new Payment({
            _id: goose.Types.ObjectId(),
        });

        o.billingProfile = bp;
        o.payment = pay;
        await o.save();

        return reply
        .code(200)
        .headers('Content-Type', 'application/json; charset=utf-8')
        .send({ product: p, order: o})
    },
    processOrder: async () => {},
    fulfillOrder: async () => {},
    cancelOrder: async (req, reply) => {
        var token = req.headers['x-access-token'] || (req.query && req.query.access_token) || (req.body && req.body.access_token);
        var input = {
            cancellationReason: req.body.cancelReason,
        }
        var authStatus = await jwt.validate(token);
        var d = new Date(0);
        d.setUTCSeconds(authStatus.exp);
        if (d <= Date.now()) {
            reply.code(400).send({
                err: "Access token has expired."
            })
        };

        const update = {
            isCanceled: true,
            cancelReason: input.cancellationReason,
        };

        var m = await Merchant.findOne({ _id: authStatus.user });
        var o = await Order.findOneAndUpdate({ customerUrl: req.params.customerUrl }, update, {
            new: true,
            returnOriginal: false,
        });

        return reply.code(201).send({
            order: o,
        })
    },
    getAllOrdersFromStorefront: async (req, reply) => {
        // getAllOrdersFromStorefrontId
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
        var sf = await Storefront.findOne({ storefrontAliasURL: req.params.url, merchant_id: m._id });
        var o = await Order.find().where({ storefront_id: sf._id });

        return reply
        .code(200)
        .send({
            orders: o,
        })
    },
    getAllCustomersFromStorefront: async (req, reply) => {
        // getAllCustomersFromStorefrontId --- query all orders and parse billingProfile subschema
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
        var sf = await Storefront.findOne({ storefrontAliasURL: req.params.url, merchant_id: m._id });
        var o = await Order.find().where({ storefront_id: sf._id });
        var c = [];
        o.forEach((order, index) => {
            c.push(order.billingProfile);
        });

        return reply
        .code(200)
        .send({
            customers: c,
        })
    },

    /**
     * VIEW PAYMENT HISTORY VIA XPRINGJS,LOGIN WITH WEB3, ..access scopes
     */
};