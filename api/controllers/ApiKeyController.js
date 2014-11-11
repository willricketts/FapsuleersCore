/**
 * ApiKeyController
 *
 * @description :: Server-side logic for managing apikeys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	addKey: addKey,
	doAddKey: doAddKey
};

function addKey(req, res) {
    res.view();
}

function doAddKey(req, res) {
    var b = req.body;
    User.findOne({ id: req.session.identity }, function(err, user) {
        errorHandler.serverError(err, res);
        ApiKey.findOne({ keyId: b.keyId, vCode: b.vCode }, function(err, key) {
            if(!key) {
                ApiKey.create({ keyId: b.keyId, vCode: b.vCode, owner: user.id }, function(err, apikey) {
                    errorHandler.serverError(err, res);
                    console.log(JSON.stringify(apikey));
                    if(apiKey) {
                        req.flash('API key created!');
                        res.redirect('/dashboard');
                    }
                    else {
                        res.serverError('API key could not be added. Go bitch at El Marrow.');
                    }
                });
            }
            else {
                req.flash('API key already exists in system. Go bitch at El Marrow');
                res.redirect('/addkey');
            }
        });
    });
}

