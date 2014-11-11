module.exports = function(req, res, next) {
    User.findOne({ id: req.session.identity }, function(err, user) {
        errorHandler.serverError(err, res);
        if(user) {
            ApiKey.findOne({ owner: user.id }, function(err, key) {
                errorHandler.serverError(err, res);
                if(key) {
                    if (key.mainCharacter) {

                        return next();
                    }
                    else {
                        req.flash('Main character not selected!');
                        res.redirect('/selectmain');
                    }
                }
            });
        }
    });
}