import React from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addLibrary} from '../actions/index';

class MusicTrackListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit() {
    console.log(this.props.track);
  }

  addSong() {
    var track = {
      name: this.props.track.name,
      url: this.props.track.album.images[0].url,
      artists: this.props.track.artists[0].name,
      BPM: this.props.BPM,
      mp3: this.props.track.name + '.mp3'
    };
    console.log(track);
    var counter = 0;
    for (var i = 0; i < this.props.library.length; i++) {
      if (track.name === this.props.library[i].name &&
          track.artists === this.props.library[i].track.artists) {
        counter += 1;
      }
    }

    if (counter === 0) {
      this.props.addLibrary(track);
    }
  }

  render() {
    return (

      <div className='entryContainer' onClick = {this.addSong.bind(this)}>
        <div className='libTitleBar'>
          <h2>{this.props.track.name}</h2>
        </div>
        <div className='imageContainer'>
          <img className="media-object" src={this.props.track.album.images[0].url} />
        </div>
        <div className='artistsContainer'>
          <br/><br/>
          <h4>{this.props.track.artists[0].name}</h4>
        </div>
        <div className='bpmContainer'>
          <br/><br/>
          <h4>{this.props.BPM}</h4>
        </div>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    library: state.library.example.tracks.items
  };
};

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addLibrary: addLibrary}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(MusicTrackListEntry);
