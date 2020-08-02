const mongoose = require('mongoose');
const { Timestamp, ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    dateDispatched: {
        type: Date,
        default: Date.now(),
    },
    
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment,
};