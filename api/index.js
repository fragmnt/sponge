require('dotenv').config();
const ffy = require('fastify')({ logger: true });
const crypto = require('crypto-js');
const db = require('./src/plugins/mongo');
const env = process.env;

// SERVICES (minio, redis, payid)

const routes = require('./src/routes');

// ..configurations, fastify plugins
ffy.register(db());

routes.forEach((route, index) => {
    ffy.route(route);
});

ffy.listen(env.PORT, (err, address) => {
    if (err) {
        ffy.log.error(err);
        process.exit(1);
    };
    ffy.log.info(`server listening on ${address}`);
});