export default (state = {
  example: {
    tracks: {
      items: [
        {
          name: 'U2',
          url: 'https://i.scdn.co/image/a22859e63b13a4794de56084d458e78e0bc95a57',
          artists: 'David Guetta/Justin Bieber',
          BPM: 144,
          mp3: 'U2.mp3'
        },
        {
          name: 'Closer',
          url: 'https://i.scdn.co/image/512bd22e2bc73f9883b8612daf4f23acaac3c776',
          artists: 'The Chainsmokers',
          BPM: 95,
          mp3: 'Close.mp3'
        },
      ]
    }
  }     
}, action) => {
  switch (action.type) {
  case 'ADD_LIBRARY' : {
    state.example.tracks.items.push(action.payload);
    break;
  }
  }
  return state;
};
