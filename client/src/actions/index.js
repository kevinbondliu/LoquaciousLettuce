import axios from 'axios';

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
      return dispatch(setTracks(data.data));
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












