require('dotenv').config();
const jwt = require('jsonwebtoken');
const env = process.env;

var secret = env.CLIENT_SECRET;

/**
 * generates access token with corresponding refresh token
 */
const generate = (payload) => {
    var signage = {
        user: payload,
    };
    // HS256
    var accessToken = jwt.sign(signage, secret, {
        expiresIn: env.ACCESS_TOKEN_LIFETIME,
        subject: env.CLIENT_ID
    });
    return accessToken;
};

/**
 * validates access token input via client secret
 */
const validate = (token) => {
    // .. receive existing token and validate it
};

/**
 * creates new access token via refresh token
 * via decode existing and generate new 
 * with extended expiry time (decodedExpiry*1000)
 */
const refresh = (token) => {
    const dtok = jwt.verify(token, secret);
    const payload = dtok.user;
    // issuedAt = dtok.iat;

    var signage = {
        user: payload,
    };

    var refreshToken = jwt.sign(signage, secret, {
        expiresIn: dtok.exp + 1000,
        subject: env.CLIENT_ID
    });
    return refreshToken;
};

/**
 * decode access token 
 */
const unwind = (token) => {
    const decoded = jwt.verify(token, secret);
    return decoded;
};

module.exports = {
    generate,
    validate,
    refresh,
    unwind
}