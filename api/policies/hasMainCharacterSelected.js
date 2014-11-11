module.exports = function(req, res, next) {
    User.findOne({ id: req.session.identity }, function(err, user) {
        errorHandler.serverError(err, res);
        if(user) {
            ApiKey.findOne({ owner: user.id }, function(err, key) {
                errorHandler.serverError(err, res);
                if(key) {
                    if (!key.mainCharaceter) {

                        return next();
                    }
                    else {
                        console.log(key.mainCharacter);
                        req.flash('Main character not selected!');
                        res.redirect('/selectmain');
                    }
                }
            });
        }
    });
}