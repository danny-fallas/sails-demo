/**
 * Emoji.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 * 
 * Model is what hold the data like in a spreadsheet
 * Record is a row in that model
 * attributes are like columns
 */

module.exports = {

  attributes: {
    text: {
      type: 'string'
    },

    //Every emoji belongs to user
    owner: {
      model: 'User'
    },

    //Every emoji belongs to user
    ownerName: {
      model: 'User'
    },

    // //This emoji is the least favorite of user
    // leastFavoriteOf: {
    //   collection: 'User',
    //   via: 'leastFavoriteEmojis'
    // }
  }
};

