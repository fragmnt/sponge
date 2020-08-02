const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const merchantSchema = new Schema({ 
    _id: ObjectID,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: Boolean,
    payId: {
        type: String,
        default: null,
    },
    createdAt: {
        required: true,
        type: Date,
    },
    updatedAt: {
        required: false,
        type: Date,
        default: null,
    }
});

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = {
    Merchant
};