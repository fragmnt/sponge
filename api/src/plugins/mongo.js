require('dotenv').config();
const fp = require('fastify-plugin');
const mongoose = require('mongoose');
const env = process.env;

async function mongoConnector(ffy, opts, done) {
    try {
        const url = env.MONGO_DB_URI;
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('.: Service :: MongoDB is connected...');
        ffy.decorate('mongo', db);
    } catch (err) {
        console.log(".::::." + err);
    };
    done();
};

module.exports = fp(mongoConnector);