import React from 'react';
import {connect} from 'react-redux';
import MusicTrackEntry from './MusicTrackEntry.jsx';


class MusicTrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className = 'MusicTrack'>
        {
          this.props.music.tracks.items.map((item, index)=> (
          <MusicTrackEntry
            key = {index}
            counter = {index}
            track={item}
            BPM={this.props.BPM[index].tempo}
          />
          ))
        }
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    music: state.music.trackObject,
    BPM: state.music.trackObject.BPMItems
    // example: state.music.example
  };
};

export default connect(mapStateToProps)(MusicTrackList);