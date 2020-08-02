const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const storefrontSchema = new Schema({
    _id: {
        type: ObjectID,
    },
    name: {
        type: String,
    },
    storefrontAliasURL: {
        type: String,
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
    }

}, () => {

});

const Storefront = mongoose.model('Storefront', storefrontSchema);

module.exports = {
    Storefront,
}