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
    res.view();
}

