/**
 * CharacterController
 *
 * @description :: Server-side logic for managing characters
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	selectMainCharacter: selectMainCharacter,
	doSelectMainCharacter: doSelectMainCharacter
};

function selectMainCharacter(req, res) {
    eve.apiCall(req.session.identity, 'account:Characters', function(response, keyId) {
        res.view({ response: response, keyId: keyId });
    });
}

function doSelectMainCharacter(req, res) {
    var b = req.body;
    var p = req.params.all();
    
    ApiKey.findOne({ keyId: p.keyId }, function(err, key) {
        errorHandler.serverError(err, res);
        if(key) {
            ApiKey.update(key.id, { mainCharacter: b.mainCharacter }, function(err, updatedKey) {
                errorHandler.serverError(err, res);
                if(updatedKey) {
                    req.flash('Main character selected!');
                    res.redirect('/dashboard');
                }
                else {
                    req.flash('Key couldn\'t be updated. Bitch at El Marrow');
                    res.redirect('/dashboard');
                }
            })
        }
        else {
            req.flash('No keyID provided. Bitch at El Marrow.');
            res.redirect('/dashboard');
        }
    });
}

