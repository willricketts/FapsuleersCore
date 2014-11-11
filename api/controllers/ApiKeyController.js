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
        ApiKey.create({ keyId: b.keyId, vCode: b.vCode, owner: user.id }, function(err, apikey) {
            errorHandler.serverError(err, res);
            if(apiKey) {
                req.flash('API key created!');
                res.redirect('/dashboard');
            }
            else {
                res.serverError('API key could not be added. Go bitch at El Marrow.');
            }
        });
    });
}

