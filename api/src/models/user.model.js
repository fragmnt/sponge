const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
    },
    password: String,
    username: String,
    payIdURL: {
        type: String,
        default: "",
    }
});

const User = mongoose.model('User', userSchema);

let createOne = async () => {
    var u = new User({
        email: 'test@test.com',
        password: 23,
        username: 'testestest'
    });
    console.log(await u.validate());
};

module.exports = {
    User
};