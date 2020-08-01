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
    short_url: {
        type: String,
    },
    isPrivate: {
        type: Boolean,
        default: true, // method toggles this to make storefront public
    }

}, () => {

});

const Storefront = mongoose.model('Storefront', storefrontSchema);

module.exports = {
    Storefront,
}