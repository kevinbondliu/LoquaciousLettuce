export default (state = {
  trackObject: {
    tracks: {
      items: []
    }
  }
}, action) => {
  switch (action.type) {
  case 'GET_TRACKS' : {
    state.trackObject = action.payload;
    break;
  }
  }
  return state;
};
