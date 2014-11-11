module.exports = {
    checkForApiKey: checkForApiKey
}

function checkForApiKey(userId, callback) {
    ApiKey.find({ owner: userId }, function(err, keys) {
       errorHandler.serverError(err, res);
       callback(keys); 
    });
}
