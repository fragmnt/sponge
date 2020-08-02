const mongoose = require('mongoose');
const { Timestamp, Decimal128, ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: {
        type: ObjectID
    },
    createdOn: {
        type: Date,
        default: Date.now(),
    },
    updatedOn: {
        type: Date,
    },
    publishedAt: {
        type: Date,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String,
        required: false,
        default: null,
    },
    productType: {
        type: Number, //subscription, digital, physical
    },
    currencyDenom: {
        type: String,
        // default: "USD"
    },
    inventoryCount: {
        type: Number,
        default: 1,
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    storefront_id: {
        type: String,
        required: true,
    },
    isAvailable: {type:Boolean, default: true},
    isPurchaseable: {type:Boolean, default: true},
    // enum for categories + metafields
    // support for variants
    // subscription: per month, per week, per year
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
    Product,
};