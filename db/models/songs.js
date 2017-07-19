const db = require('../');

const Song = db.Model.extend({
  tableName: 'songs',
  highscores: function() {
    return this.hasOne('Highscore');
  },
  games: function() {
    return this.hasMany('Game');
  },
});

module.exports = db.model('Song', Song);
