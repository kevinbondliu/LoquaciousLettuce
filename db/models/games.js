const db = require('../');

const Game = db.Model.extend({
  tableName: 'games',
  profiles: function() {
    return this.hasOne('Profile');
  },
  songs: function() {
    return this.hasOne('Song');
  },
});

module.exports = db.model('Game', Game);
