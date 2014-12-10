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
    if(req.session.authenticated == true) {
        res.redirect('/dashboard');
    }
    res.view({ layout: 'externallayout' });
}

function register(req, res) {
    res.view({ layout: 'externallayout' });
}

function login(req, res) {
    res.view({ layout: 'externallayout' });
}

function dashboard(req, res) {
    apiKey.checkForApiKey(req.session.identity, function(keys) {
        User.findOne({ id: req.session.identity }, function(err, user) {
           errorHandler.serverError(err, res);
           res.view({ keys: keys, user: user });
        });
    });
}

function createPayout(req, res) {
    res.view();
}
