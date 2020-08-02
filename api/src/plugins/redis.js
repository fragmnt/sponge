require('dotenv').config();
const Redis = require('ioredis');
const env = process.env;
const fp = require('fastify-plugin');

async function redisConnector(ffy, opts, done) {
    try {
        // ...
        const config = {
            port: env.REDIS_PORT,
            host: env.REDIS_HOST,
            password: env.REDIS_PASSWORD,
        };
        const r = new Redis(config);
        await r;
        console.log('.: Service :: Redis is connected...');
        ffy.decorate('redis', r);
    } catch (err) {
        console.log(".::::." + err);
    }
    done();
};

module.exports = fp(redisConnector);