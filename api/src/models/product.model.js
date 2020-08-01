const mongoose = require('mongoose');
const { Timestamp, Double } = require('mongodb');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    currencyDenom: {
        type: String,
    },
    isFulfilled: {
        type: Boolean,
        default: false,
    }
    // enum for type categories
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
    Product,
};