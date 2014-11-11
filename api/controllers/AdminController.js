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
    res.view();
}
