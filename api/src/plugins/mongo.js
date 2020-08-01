require('dotenv').config();
const fp = require('fastify-plugin');
const mongoose = require('mongoose');
const env = process.env;

async function mongoConnector(fastify, options) {
    try {
        // CONNECT TO DB ...
        const url = env.MONGO_DB_URI;
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            
        console.log('mongoDB is connected...');
        fastify.decorate('mongo', db);
        });
    } catch (err) {
        console.log(err);
    }
    // next();
}

module.exports = fp(mongoConnector);