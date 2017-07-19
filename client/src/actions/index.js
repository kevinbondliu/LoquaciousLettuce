export const selectUser = (user) => { // function that is the action creator
  console.log('You clicked on user: ', user.username);
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

export const changeSong = (song) => {
  console.log('song', song);
  return {
    type: 'CHANGE_SONG',
    payload: song
  };
};

export const getGame = () => {
  return {
    type: 'GET_GAME',
    payload: ''
  };
};