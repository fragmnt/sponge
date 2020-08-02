const mongoose = require('mongoose');
const { Timestamp, ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
    processedAt: Date,
    updatedOn: {
        type: Date,
    },
    product_id: {
        type: ObjectID,
        required: true,
    },
    orderNumber: {
        type: String,
        unique: true,
    },
    couponCode: {
        type: String,
        required: false,
    },
    paymentMethod: Number, // enum for choice
    totalPrice: Number,
    isConfirmed: {
        type: Boolean,
        default: false,
    },
    isProcessed: {
        type: Boolean,
        default: false,
    },
    orderStatus: String,
    financialStatus: Boolean, // paid or not
    fulfillmentStatus: String,
    isFulfilled: {
        type: Boolean,
        default: false,
    },
    isCanceled: Boolean,
    cancelReason: String,
    customerUrl: String, // to view order status after placing
    storefront_id: {
        type: ObjectID,
        required: true,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order,
};