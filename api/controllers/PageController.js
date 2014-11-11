/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: index,
	register: register,
	login: login,
	dashboard: dashboard
};

function index(req, res) {
    res.view();
}

function register(req, res) {
    res.view();
}

function login(req, res) {
    res.view();
}

function dashboard(req, res) {
    apiKey.checkForApiKey(req.session.identity, function(keys) {
        User.findOne({ id: req.session.identity }, function(err, user) {
           errorHandler.serverError(err, res);
           if(user.admin === true) {
               ApiKey.find(function(err, allKeys) {
                  errorHandler.serverError(err, res);
                  res.view({ keys: keys, allKeys: allKeys }); 
               });
           }
           else {
               res.view({ keys: keys });
           }
        });
    });
}

