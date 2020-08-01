require('dotenv').config();
const env = process.env;

module.exports = {
    development: {},
    staging: {},
    qa: {},
    testing: {},
    production: {
        port: env.PORT,
    }
}