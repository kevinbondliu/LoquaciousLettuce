export default (state = {
  trackObject: {
    tracks: {
      items: []
    },
    BPMItems: [{tempo: 10}]
  },
}, action) => {
  switch (action.type) {
  case 'GET_TRACKS' : {
    return {
      trackObject: action.payload
    };
    break;
  }
  }
  return state;
};
