const {
    User, Order, Product, Storefront
} = require('../models');

module.exports = {
    registerNewMerchant: async (req, reply) => {
        User.create();
        console.log(req.params);
        return reply.send({ msg: "hello!"});
    },
    loginExistingMerchant: (req, reply) => {
          // get long_url
        var long_url = "";
        return reply.redirect(long_url);
    },
};