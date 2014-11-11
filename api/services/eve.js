module.exports = {
    apiCall: apiCall
}

var neow = require('neow');

function apiCall(method, callback) {
    client.fetch(method).then(function(result) {
       callback(result); 
    });
}
