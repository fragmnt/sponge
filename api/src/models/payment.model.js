const mongoose = require('mongoose');
const { Timestamp, ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    _id: {
        type: ObjectID
    },
    dateDispatched: {
        type: Date,
        default: Date.now(),
    },
    
    payId: {
        type: String,
    },
    cardNumber: {
        type: String,
    },
    cvvcNumber: {
        type: String,
    },
    cardMonth: {
        type: String,
    },
    cardYear: {
        type: String,
    },

    xrpAddress: {
        type: String,
    },
    sent: {
        type: Boolean,
        default: false,
    },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment,
    paymentSchema
};