module.exports = function(req, res, next) {
    if(req.authenticated == true) {
        res.redirect('/dashboard');
    }
}