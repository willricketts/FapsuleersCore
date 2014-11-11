module.exports = {
    apiCall: apiCall
}

var neow = require('neow');

function apiCall(identity, method, callback) {
    
    User.findOne({ id: identity }, function(err, user) {
        if(user) {
            ApiKey.findOne({ owner: user.id }, function(err, key) {
                if(key) {
                    var client = new neow.EveClient({
                        keyID: key.keyId,
                        vCode: key.vCode
                    });
                    
                    client.fetch(method).then(function(result) {
                       callback(result, key.keyId); 
                    });
                }                
            });
        }
    });
}
