import React from 'react';
import {connect} from 'react-redux';
import MusicTrackEntry from './MusicTrackEntry.jsx';


class MusicTrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: {
        tracks: {
          items: [
            {
              album: {
                images: [
                  {
                    url: 'https://i.scdn.co/image/797009754c30847254b48de483f256258d90df7f'
                  }
                ],
                artists: [
                  {name: 'David Guetta'}
                ]
              },
              name: '2U'
            }
          ]
        }
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.setState({
      example: {
        tracks: {
          items: [
            {
              album: {
                images: [
                  {
                    url: 'https://i.scdn.co/image/797009754c30847254b48de483f256258d90df7f'
                  }
                ],
                artists: [
                  {name: 'David Guetta'}
                ]
              },
              name: '2U'
            }
          ]
        }
      }
    });
  }

  handleClick() {
    console.log(this.state.example.tracks.items[0].album.images[0].url);
  }

  render() {
    return (
      <div className = 'MusicTrack' style={{height: 400, overflow: 'scroll'}}>
        <button onClick = {this.handleClick.bind(this)}></button>
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