const ffy = require('fastify')({logging: true});
const controller = require('../funcs');

const routes = [
    {
        method: 'GET',
        url: '/',
        handler: controller.root
    },
    {
        method: 'POST',
        url: '/register',
        handler: controller.register
        // schema: x-www-form-urlencoded
    },
    {
        method: 'POST',
        url: '/login',
        handler: controller.login
        // schema
    },
    /*{
        method: 'GET',
        url: '/:storefront_url',
        // handler: controller,
        // options == schema
    },*/
    {
        method: 'POST',
        url: '/storefront/create',
        handler: controller.createStorefront,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/storefront/:alias',
        handler: controller.getStorefront,
        preValidation: controller.middleware,
    }
];

module.exports = routes;