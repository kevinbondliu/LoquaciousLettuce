import axios from 'axios';
var Promise = require('bluebird');

export const selectUser = (user) => { // function that is the action creator
  console.log('You clicked on user: ', user.username);
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

const setTracks = (object) => {
  console.log('object', object);
  return {
    type: 'GET_TRACKS',
    payload: object
  };
};

export const getTracks = (url, options) => (dispatch, getState) => {
  axios.get(url, options)
    .then((data) => {
      var storage = data.data.tracks.items;
      var count = 0;
      var SpotifyIDstorage = [];
      data.data['BPMItems'] = [];
      for (var i = 0; i < storage.length; i ++) {
        data.data.BPMItems.push(
          axios('https://api.spotify.com/v1/audio-features/' + storage[i].id, options)
            .then((data) => {
              return data.data;
            })  
        );
      }
      Promise.all(data.data.BPMItems)
        .then(function(result) {
          data.data.BPMItems = result;
          return data.data;
        })
        .then((data)=> {
          return dispatch(setTracks(data));
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const changeSong = (song) => {
  console.log('song', song);
  return {
    type: 'CHANGE_SONG',
    payload: song
  };
};

export const changeDifficulty = (difficulty) => {
  console.log('difficulty', difficulty);
  return {
    type: 'CHANGE_DIFFICULTY',
    payload: difficulty
  };
};

export const changePlayers = (playerCount) => {
  console.log('playerCount', playerCount);
  return {
    type: 'CHANGE_PLAYERS',
    payload: playerCount
  };
};

export const getGame = () => {
  return {
    type: 'GET_GAME',
    payload: ''
  };
};

export const selectMode = (playerMode) => {
  console.log("You chose", playerMode);
  return {
    type: 'MODE_SELECTED',
    payload: playerMode
  };
};


/***********VIEW CHANGE************/

export const changeView = (view) => {
  console.log("View", view);
  return {
    type: 'CHANGE_VIEW',
    payload: view
  };
};


export const showModal = (obj) => {
  console.log("OPENED ---obj", obj);
  return {
    type: 'SHOW_MODAL',
    payload: obj
  };
};

export const closeModal = (obj) => {
  console.log("CLOSED --");
  return {
    type: 'CLOSE_MODAL',
    payload: obj
  };
};












