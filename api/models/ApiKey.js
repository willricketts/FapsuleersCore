/**
* ApiKey.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
  adapter: 'mongo',

  attributes: {
      
      keyId: {
        type: 'string',
        required: true,
        unique: true  
      },
      
      vCode: {
        type: 'string',
        required: true,
        unique: true
      },
      
      mainCharacter: {
        type: 'string',
        unique: true
      },
      
      owner: {
        type: 'integer',
        required: true
      }
  }
};

