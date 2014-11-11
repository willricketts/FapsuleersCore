/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	register: register,
	login: login
};

var bcrypt = require('bcrypt');

function register(req, res) {
    var b = req.body;
    User.findOne({ email: b.email }, function(err, user) {
       if(err) { res.send(500); }
       if(!user) {
           
       }
    });
}

function login(req, res) {
    
}

