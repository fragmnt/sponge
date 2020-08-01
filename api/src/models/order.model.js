const mongoose = require('mongoose');
const { Timestamp, ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    poNumber: String,
    storefrontId: ObjectID,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order,
};