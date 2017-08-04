export default (state = {
  example: {
    tracks: {
      items: [
        {
          name: '2U',
          url: 'https://i.scdn.co/image/a22859e63b13a4794de56084d458e78e0bc95a57',
          artists: 'David Guetta/Justin Bieber',
          BPM: 144,
          mp3: '2U.mp3'
        },
        {
          name: 'Closer',
          url: 'https://i.scdn.co/image/512bd22e2bc73f9883b8612daf4f23acaac3c776',
          artists: 'The Chainsmokers',
          BPM: 95,
          mp3: 'Close.mp3'
        },
        {
          name: 'Break Free',
          url: 'https://i.scdn.co/image/403d7d3b6ef12efdfc3d90a375316581a92400ea',
          artists: 'Ariana Grande ft(Zedd)',
          BPM: 130,
          mp3: 'BreakFree.mp3'
        },
        {
          name: 'White and Nerdy',
          url: 'https://i.scdn.co/image/22405c0e09bc751bf48de432a777d35895469195',
          artists: 'Wierd Al',
          BPM: 143,
          mp3: 'WhiteAndNerdy.mp3'
        }
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
