const ffy = require('fastify')({logging: true});
const controller = require('../funcs');

const routes = [
    {
        method: 'GET',
        url: '/',
        handler: controller.generateShortUrl
    },
    {
        method: 'POST',
        url: '/register',
        handler: controller.register
        // schema: x-www-form-urlencoded
    },
    {
        method: 'GET',
        url: '/:storefront_url',
        handler: controller.login,
        // options == schema
    },
];

module.exports = routes;