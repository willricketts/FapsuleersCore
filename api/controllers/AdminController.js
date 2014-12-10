/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	adminDesk: adminDesk,
  setLeaders: setLeaders,
  doSetLeaders: doSetLeaders
};

function adminDesk(req, res) {
    ApiKey.find(function(err, allKeys) {
       errorHandler.serverError(err, res);
       if(allKeys) {
           res.view({ keys: allKeys });
       }
       else {
           res.serverError();
       }
    });
}

function setLeaders(req, res) {
  res.view();
}

function doSetLeaders(req, res) {
  var b = req.body;
}
