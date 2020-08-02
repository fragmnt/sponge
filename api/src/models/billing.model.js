const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const billingSchema = new Schema({
    createdOn: {
        type: Date,
        default: Date.now(),
    },
    firstName: String,
    lastName: String,
    company: String,
    address1: String,
    address2: String,
    city: String,
    postcode: Number,
    country: Number,    // enum{us:1}
    state: Number,      // enum {ny:2}
    email: String,
    phoneNumber: String,
    isRegistered: {
        type: Boolean,
        default: false
    },
    payId: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: Number,
    },
    order_id: {
        type: ObjectID,
        required: true,
    },
});

const BillingProfile = mongoose.model('BillingProfile', billingSchema);

module.exports = {
    BillingProfile,
};