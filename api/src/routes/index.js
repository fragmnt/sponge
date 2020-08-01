const ffy = require('fastify')({logging: true});
const controller = require('../funcs');

const routes = [
    {
        method: 'GET',
        url: '/:storefront_url',
        handler: controller.loginExistingMerchant
    },
];

module.exports = routes;