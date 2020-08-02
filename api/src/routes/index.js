const ffy = require('fastify')({logging: true});
const controller = require('../funcs');

const routes = [
    {
        method: 'GET',
        url: '/',
        handler: controller.root
    },
    // auth
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
        //  options == schema
    },
    // storefronts
    {
        method: 'POST',
        url: '/storefront/create',
        handler: controller.createStorefront,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/storefront/:alias', // https://sponge.id/shop/:alias
        handler: controller.getStorefront,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/my/storefronts',
        handler: controller.getAllStorefrontsByMerchant,
        preValidation: controller.middleware,
    },
    // products
    {
        method: 'POST',
        url: '/product/new',
        handler: controller.createNewProduct,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/product/:url',
        handler: controller.getProductByURL,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/storefront/:alias/products',
        handler: controller.getAllProductsFromStorefront,
        preValidation: controller.middleware,
    },
    // orders
    {
        method: 'POST',
        url: '/product/:url/checkout',
        handler: controller.createOrder,
        preValidation: controller.middleware,
    },
    {
        method: 'POST',
        url: '/orders/track/:customerUrl/cancel',
        handler: controller.cancelOrder,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/storefront/:url/orders',
        handler: controller.getAllOrdersFromStorefront,
        preValidation: controller.middleware,
    },
    {
        method: 'GET',
        url: '/storefront/:url/customers',
        handler: controller.getAllCustomersFromStorefront,
        preValidation: controller.middleware,
    },
    // ...
];

module.exports = routes;