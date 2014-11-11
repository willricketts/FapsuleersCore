module.exports = {
    hashPassword: hashPassword,
    checkPassword: checkPassword
}

var bcrypt = require('bcrypt');

function hashPassword(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            callback(err, hash);
        });
    });
}

function checkPassword(password, dbPassword, callback) {
    bcrypt.compare(password, dbPassword, function(err, res) {
        callback(err, res);
    });
}
