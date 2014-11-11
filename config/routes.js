// ROUTES //

module.exports.routes = {
    
    //PAGE CONTROLLER - GET
    'get /': 'PageController.index',
    'get /register': 'PageController.register',
    'get /login': 'PageController.login',
    'get /dashboard': 'PageController.dashboard',
    
    //AUTH CONTROLLER - GET
    'get /logout': 'AuthController.logout',
    
    //AUTH CONTROLLER - POST
    'post /register': 'AuthController.register',
    'post /login': 'AuthController.login',
    
    //APIKEY CONTROLLER - GET
    'get /addkey': "ApiKeyController.addKey",
    
    //APIKEYCONTROLLER - POST
    'post /addkey': 'ApiKeyController.doAddKey'
};
