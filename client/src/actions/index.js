export const selectUser = (user) => { // function that is the action creator
  console.log("You clicked on user: ", user.username);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};