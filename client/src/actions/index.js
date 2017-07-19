export const selectUser = (user) => { // function that is the action creator
  console.log("You clicked on user: ", user.username);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};

export const selectMode = (playerMode) => {
  console.log("You chose", playerMode);
  return {
    type: 'MODE_SELECTED',
    payload: playerMode
  }
};


