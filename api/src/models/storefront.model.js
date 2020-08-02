const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const storefrontSchema = new Schema({
    _id: {
        type: ObjectID,
    },
    name: {
        type: String,
        required: true
    },
    storefrontAliasURL: { // aka subdomain or just 'alias'
        type: String,
        unique: true,
        required: true
    },
    isPrivate: {
        type: Boolean,
        default: true, // method toggles this to make storefront public
    },
    merchant_id: {
        type: ObjectID,
        required: true,
    },
    createdOn: {
        type: Date,
        required: true
    },
    primaryCurrency: {
        type: Number
    },
    supportEmail: {
        type: String,
        default: ""
    },
    logoUrl: {
        type: String,
        required: false,
    },
    coverImageURL: {
        type: String,
        required: false
    },

}, () => {

});

const Storefront = mongoose.model('Storefront', storefrontSchema);

module.exports = {
    Storefront,
}