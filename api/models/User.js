/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
  adapter: 'mongo',

  attributes: {

    email: {
        type: 'email',
        required: true,
        unique: true
    },
    
    password: {
        type: 'string',
        required: true,
    },
    
    mainCharacter: {
        type: 'string',
        unique: true
    },
    
    admin: {
        type: 'boolean',
        defaultsTo: false
    }
  }
};

