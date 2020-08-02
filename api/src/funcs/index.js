const {
    Merchant, Order, Product, Storefront, Session
} = require('../models');

const bcrypt = require('../utils/bcrypt');
const jwt = require('../utils/jwt');
const ses = require('../utils/sessions');

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
            pswdHash = bcrypt.hashPassword(input.pswd);
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

        await m.save();

        // generate sessionId and access/refresh tokens
        var sid = await ses.generate(m._id, input.ip);
        var atok = await jwt.generate(m._id);
        var rtok = await jwt.refresh(atok);

        // create session on database
        var sesh = new Session({
            sessionId: sid,
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
    
    /* 
        * UPLOAD NEW PFP TO MINIO BUCKET
        *  AND ADD DATA TO DOCUMENT FIELD IN MONGO 
    */
    uploadPfp: (req, reply) => {
        // var buffer = "";
        // var file = Buffer.from(buffer, 'hex');
        
       /* console.log(mc);
        
        var fileName = "icon.png";
        var fileLocation = `./${fileName}`;
        var bucketNameInput = "dogg"
        
        const uploadFile = async () => {
            
            await mc.makeBucket(bucketNameInput.toString(), 'us-east-1', (err) => {
                if (err) return console.log(err);
                console.log('bucket created successfully');
            });
            
            var metadata = {
                'Content-Type': 'application/octet-stream',
                'X-Amz-Meta-Testing': 1234,
                'example': 5678
            };
            
            // Using fPutObject API upload your file to the bucket europetrip.
            await mc.fPutObject(bucketNameInput, fileName, fileLocation, metadata, (err, etag) => {
              if (err) return console.log(err)
              console.log('File uploaded successfully.');
              console.log(etag);
            });
        };
        
        uploadFile(); */
    },
    generateShortUrl: (req, reply) => {
        const shortcut = sid.generate();
        return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ url: `https://sponge.id/shop/${shortcut}`});
        // redirect();
    }
};