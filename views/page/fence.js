module.exports = function(req, res, next) {
    if(req.session.authenticated == true) {
        res.redirect('/dashboard');
    }
    else {
        return next();
    }
}