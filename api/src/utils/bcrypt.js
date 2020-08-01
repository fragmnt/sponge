
const bcrypt = require('bcryptjs');

const hashPassword = (passwordInput) => {
    var salt = bcrypt.genSaltSync(10);
    var sanitized = passwordInput.toString();
    var hash = bcrypt.hashSync(sanitized, salt);
    return hash;
};

const checkPassword = (passwordInput, storedPassword) => {
    var santiziedPI = passwordInput.toString();
    var santiziedSP = storedPassword.toString();
    var comparison = bcrypt.compareSync(santiziedPI, santiziedSP);
    return comparison;
};

module.exports = {
    hashPassword,
    checkPassword
};