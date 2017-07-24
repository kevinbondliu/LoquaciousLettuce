import React from 'react';
import {connect} from 'react-redux';
import MusicTrackEntryLib from './MusicTrackEntryLib.jsx';
import {bindActionCreators} from 'redux';
import {changeSong} from '../actions/index';

class MusicTrackListLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            {
              name: 'Def',
              url: 'https://i.scdn.co/image/797009754c30847254b48de483f256258d90df7f',
              artists: 'Kitty Kat',
              BPM: 120,
              mp3: 'Def.mp3'
            },
            {
              name: 'Face',
              url: 'https://i.scdn.co/image/797009754c30847254b48de483f256258d90df7f',
              artists: 'Kat Kitty',
              BPM: 150,
              mp3: 'Face.mp3'
            },
          ]
        }
      }

    };
    this.chooseSong = this.chooseSong.bind(this);
  }


  chooseSong(item) {
    console.log('clicked', item);
    this.props.changeSong(item);
  }

  render() {
    return (
      <div className = 'MusicTrack' style={{height: 400, overflow: 'scroll'}}>
          {
            this.state.example.tracks.items.map((item, index) => (
              <MusicTrackEntryLib
                choose = {this.chooseSong}
                item = {item}
                key = {index}
              />
            ))
          }
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    music: state.music
  };
};

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({changeSong: changeSong}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(MusicTrackListLib);
