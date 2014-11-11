// ROUTES //

module.exports.routes = {
    
    //PAGE CONTROLLER - GET
    'get /': 'PageController.index',
    'get /register': 'PageController.register',
    'get /login': 'PageController.login',
    'get /dashboard': 'PageController.dashboard',
    
    //AUTH CONTROLLER -GET
    
    //AUTH CONTROLLER - POST
    'post /register': 'AuthController.register'
};
