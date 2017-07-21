const models = require('../models');

// DEFINE FUNCTIONS FOR INSERTING SEED DATA (PROFILES ARE HANDLED SEPARATELY)
let createSongs = (knex, id) => {
  return knex('songs').insert({
//    id: 1,
    owner: 1,
    url: 'MusicFiles/U2.mp3',
    songname: 'Bloody Sunday',
    bpm: 120,
    key: 7,
    highscore: 4410,
    pattern: '{1:0,1:500,3:1500,2:2000,4:2000,1:3000,3:3000,3:4500,4:4500,4:5000,2:5000,1:5500,}',
  });
};

let createGames = (knex, id) => {
  return knex('games').insert({
//    id: 1,
    profile_id: 1,
    song_id: 1,
    score: 4410,
    difficultylevel: 4,
  });
};

let createHighscores = (knex, id) => {
  return knex('highscores').insert({
//    id: 1,
    profile_id: 1,
    song_id: 1,
    game_id: 1,
    highscore: 4410,
  });
};

exports.seed = (knex, Promise) => {
  // DELETE EXISTING ENTRIES
  return knex('highscores').del()
  .then(()=>{
    return knex('games').del();
  })
  .then(()=> {
    return knex('songs').del();
  })  
// THEN PUT NEW ONES BACK IN
  .then(() => {
    let records = [];
    records.push(createSongs(knex));
    records.push(createGames(knex));
    records.push(createHighscores(knex));
    return Promise.all(records);
  }).catch((err) => {
    console.log('err:', err);
  });
};