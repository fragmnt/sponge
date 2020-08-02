require('dotenv').config();
const ffySession = require('fastify-session');
const ffyCookie = require('fastify-cookie');
const ffyMultipart = require('fastify-formbody');

const ffy = require('fastify')({ logger: true });
const mongo = require('./src/plugins/mongo');
const minio = require('./src/plugins/minio');
const redis = require('./src/plugins/redis');

const env = process.env;

/* SERVICES (minio, redis, payid)
..configurations, fastify plugins */

ffy.register(ffyCookie);
ffy.register(ffyMultipart);
ffy.register(ffySession, {
    secret: env.CLIENT_SECRET
});
ffy.register(mongo);
ffy.register(minio);
ffy.register(redis);

const routes = require('./src/routes');
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