/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	register: register,
	login: login,
	logout: logout
};

var bcrypt = require('bcrypt');

function register(req, res) {
    var b = req.body;
    User.findOne({ email: b.email }, function(err, user) {
       if(err) { res.send(500); }
       if(!user) {
           auth.hashPassword(b.password, function(err, hash) {
              User.create({ email: b.email, password: hash }, function(err, user) {
                  errorHandler.serverError(err, res);
                  if(user) {
                      req.session.identity = user.id;
                      req.session.authenticated = true;
                      res.redirect('/dashboard');
                  }
                  else {
                      res.redirect('/');
                  }
              });
           });
       }
    });
}

function login(req, res) {
    var b = req.body;
    User.findOne({ email: b.email }, function(err, user) {
        errorHandler.serverError(err, res);
        if(user) {
            auth.checkPassword(b.password, user.password, function(err, result) {
               if(result == true) {
                   req.session.identity = user.id;
                   req.session.authenticated = true;
                   res.redirect('dashboard');
               }
               else {
                   req.flash('Incorrect Password')
                   res.redirect('/login');
               }
            });
        }
        else {
            req.flash('Incorrect email address');
            res.redirect('/login');
        }
    });
}

function logout(req, res) {
    req.session.authenticated = false;
    req.flash('Successfully logged out.');
    res.redirect('/');
}
