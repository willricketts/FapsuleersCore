/**
 * CharacterController
 *
 * @description :: Server-side logic for managing characters
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	selectMainCharacter: selectMainCharacter
};

function selectMainCharacter(req, res) {
    eve.apiCall(req.session.identity, 'account:Characters', function(response) {
        console.log('EVE API CALL TIME!!!');
        var output = JSON.parse(response);
        console.log(output);
        res.view({ output: output });
    });
}

