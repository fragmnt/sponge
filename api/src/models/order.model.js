const mongoose = require('mongoose');
const { Timestamp, ObjectID } = require('mongodb');
const {billingSchema} = require('./billing.model');
const {paymentSchema} = require('./payment.model');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    _id: {
        type: ObjectID,
    },

    dateCreated: {
        type: Date,
        default: Date.now(),
    },
    processedAt: {
        type: Date,
        required: false,
    },
    updatedOn: {
        type: Date,
        required: false,
    },

    orderNumber: {
        type: String,
        unique: true,
    },
    couponCode: {
        type: String,
        required: false,
    },

    payment: paymentSchema,
    paymentMethod: {type: Number,
    required: true}, // enum for choice {0: payid, 1: traditional, 2: crypto - xrp ripple }
    
    totalPrice: {
        type: Number,required: true,
    },
    
    isConfirmed: {
        type: Boolean,
        default: false,
    },
    isProcessed: {
        type: Boolean,
        default: false,
    },
    isFulfilled: {
        type: Boolean,
        default: false,
    },
    isCanceled: {
        type: Boolean,
        default: false,
    },

    orderStatus: Number, // enum {0: not processed, 1: processed, not shipped, 2: shipped}
    financialStatus: {type: Boolean, default: false}, // paid or not
    fulfillmentStatus: Number, // enum
    cancelReason: String, // description of why customer cancelled product

    customerUrl: {
        type: String,
        unique: true,
    }, // to view order status after placing
    storefront_id: {
        type: ObjectID,
        required: true,
    },
    product_id: {
        type: ObjectID,
        required: true,
    },
    billingProfile: billingSchema,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order,
};