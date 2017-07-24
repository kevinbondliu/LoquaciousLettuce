export default (state = {
  trackObject: {
    tracks: {
      items: []
    },
    BPMItems: [{tempo: 10}]
  },
  example: {
    tracks: {
      items: [
        {
          album: {
            images: [
              'https://i.scdn.co/image/797009754c30847254b48de483f256258d90df7f'
            ],
            artists: [
              'David Guetta'
            ]
          },
          name: '2U'
        }
      ]
    }
  }
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
