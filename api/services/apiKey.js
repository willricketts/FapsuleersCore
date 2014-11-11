module.exports = {
    checkForApiKey: checkForApiKey
}

function checkForApiKey(userId, callback) {
    ApiKey.find({ owner: userId }, function(err, keys) {
       if(err) {
           return res.serverError('Something broke! Go bitch at El Marrow.');
       }
       callback(keys); 
    });
}
