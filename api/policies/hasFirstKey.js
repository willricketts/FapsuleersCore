module.exports = function(req, res, next) {
    User.findOne({ email: req.session.identity }, function(err, user) {
       errorHandler.serverError(err, res);
       ApiKey.find({ owner: user.id }, function(err, keys) {
          errorHandler.serverError(err, res);
           if (!keys[0]) {
               res.redirect('/addkey');
           }
           else {
               return next();
           }
       });
    });
}