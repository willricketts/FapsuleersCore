module.exports = {
    hashPassword: hashPassword,
    checkPassword: checkPassword
}

var bcrypt = require('bcrypt');

function hashPassword(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            callback(hash);
        });
    });
}

function checkPassword(email, password, callback) {
    
}
