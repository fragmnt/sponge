require('dotenv').config();
const crypto = require('crypto-js/sha256'); // sha256

const env = process.env;
var secret = env.CLIENT_SECRET;

/**
 * @param {*} payload 
 * @param {*} ipAddress 
 * generate new sessionid
 */
const generate = (payload, ipAddress) => {
    var encrypt = payload + secret + Date.now() + ipAddress;
    const hash = crypto('sha256', encrypt);
    return hash;
};

/**
 * 
 * @param {*} payload 
 * decrypt sha256 hash
 */
const dissect = (payload) => {

};

module.exports = {
    generate, 
    dissect
}