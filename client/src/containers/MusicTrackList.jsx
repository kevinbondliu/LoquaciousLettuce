import React from 'react';
import {connect} from 'react-redux';
import MusicTrackEntry from './MusicTrackEntry.jsx';


class MusicTrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  getProps() {
    console.log(this.props.music.tracks.items);
  }



  render() {
    return (
      <div className = 'MusicTrack' style={{height: 450, overflow: 'overlay'}}>
        <button onClick={this.getProps.bind(this)}></button>
        {this.props.music.tracks.items.map((item, index)=> (
          <MusicTrackEntry/>
        ))}
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    music: state.music.trackObject
  };
};

export default connect(mapStateToProps)(MusicTrackList);