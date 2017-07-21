import React from 'react';
import {connect} from 'react-redux';
import MusicTrackEntry from './MusicTrackEntry.jsx';

class MusicTrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  getProps() {
    console.log(this.props.music.trackObject.tracks.items);
  }



  render() {
    return (
      <div className = 'MusicTrack'>
        <button onClick={this.getProps.bind(this)}></button>
        {this.props.music.trackObject.tracks.items.map((item, index)=> (
          <MusicTrackEntry/>
        ))};
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    music: state.music
  };
};

export default connect(mapStateToProps)(MusicTrackList);