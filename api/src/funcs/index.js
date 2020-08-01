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
    /**
     * CREATE NEW MERCHANT ACCOUNT
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

        var m = new Merchant({
            email: input.email,
            password: pswdHash,
            username: input.alias,
            createdAt: Date.now(),
        });
        // create user on database

        // generate sessionId and access/refresh tokens
        var sid = await ses.generate(m.username, input.ip);
        var sesh = new Session({
            sessionId: sid,
            user_id: m._id,
            createdAt: Date.now(),
            ipAddress: input.ip,
            hostName: input.host,
        });
        var atok = await jwt.generate(m.username);
        var rtok = await jwt.refresh(atok);

        return reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ merchant: m, session: sesh, tokens: {
                access: atok,
                refresh: rtok,
            }, session_id: sesh.sessionId
        });
    },
    /**
     * LOGIN EXISTING MERCHANT ACCOUNT
     */
    login: (req, reply) => {
          // get long_url
        var long_url = "";
        return reply.redirect(long_url);
    },
    relogin: (req, reply) => {},
    /* 
        * UPLOAD NEW PFP TO MINIO BUCKET
        *  AND ADD DATA TO DOCUMENT FIELD IN MONGO */
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
    }
};