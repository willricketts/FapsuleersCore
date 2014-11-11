// ROUTES //

module.exports.routes = {
    
    //PAGE CONTROLLER
    'get /': 'PageController.index',
    'get /register': 'PageController.register',
    'get /login': 'PageController.login',
    'get /dashboard': 'PageController.dashboard'
};
