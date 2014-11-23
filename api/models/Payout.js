/**
* Payout.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  adapter: 'mongo',
  
  attributes: {
    creator: {
      type: 'string',
      required: true
    },

    wingId: {
      type: 'string',
      required: true
    },

    ancientCoordinates: {
      type: 'integer'
    },
    
    meltedNanoribbons: {
      type: 'integer'
    },

    neuralNetworkAnalyzer: {
      type: 'integer'
    },

    sleeperDataLibrary: {
      type: 'integer'
    },

    sleeperDroneAi: {
      type: 'integer'
    },

    iskTotal: {
      type: 'integer'
    },

    notes: {
      type: 'text'
    }
  }
};
