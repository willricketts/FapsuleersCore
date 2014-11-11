module.exports = function(req, res, next) {
    User.findOne({ id: req.session.identity }, function(err, user) {
        errorHandler.serverError(err, res);
        if(user.admin == true) {
            return next();
        }
        else {
            return res.forbidden("STAY IN THE FENCE.");
        }
    });
}