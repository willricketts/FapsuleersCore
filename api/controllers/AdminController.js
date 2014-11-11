/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	adminDesk: adminDesk
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
