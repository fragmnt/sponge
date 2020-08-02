/**
 * Events queue for analytics, order-tracking on Sponge
 */

require('dotenv').config();
const env = process.env;
const Redis = require('ioredis');
const r = new Redis({
        port: env.REDIS_PORT,
        host: env.REDIS_HOST,
        password: env.REDIS_PASSWORD,
});
const queue = require('bull');
const cluster = require('cluster');

var analyticsPipeline = r.pipeline();
analyticsPipeline
    .set("order_placed", orderNumber)
    .del("in_cart")
    .exec();

var orderDispatchQueue = new queue('order dispatching', {redis: {port: env.REDIS_PORT, host: env.REDIS_HOST, password: env.REDIS_PASSWORD}});

orderDispatchQueue.add() // add data as a job to be processed

orderDispatchQueue.process((job, done) => {
    // view progress by calling .progress() method
});