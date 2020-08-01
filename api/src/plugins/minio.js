require('dotenv').config();
const m = require('minio');
const env = process.env;
const fp = require('fastify-plugin');

async function minioConnector(ffy, opts, done) {
    try {
        const mc = new m.Client({
            endPoint: env.MINIO_URL, // url
            port: parseInt(env.MINIO_PORT),
            useSSL: true,
            accessKey: env.MINIO_ACCESS_KEY,
            secretKey: env.MINIO_SECRET_KEY
        });
        console.log('.: Service :: Minio S3 is connected...');
        ffy.decorate('minio', mc);
    } catch (err) {
        console.log(".::::." + err);
    }
    done();
};

module.exports = fp(minioConnector);