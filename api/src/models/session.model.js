const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({ 
    _id: ObjectID,
    sessionId: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
        default: null,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    accessedAt: Date,
    expiresAt: Date,
    hostName: String,
    ipAddress: {
        type: String,
        required: false,
        default: null
    },
    terminated: Boolean,

});

const Session = mongoose.model('Session', sessionSchema);

module.exports = {
    Session
};