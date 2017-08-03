import React from 'react';
import {Panel} from 'react-bootstrap';


class MusicTrackListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.songChange = this.songChange.bind(this);
  }

  handleSubmit() {
    console.log(this.props.item);
  }

  songChange() {
    var item = {
      mp3: this.props.item.mp3,
      bpm: this.props.item.BPM
    };
    this.props.choose(item);
  }

  render() {
    return (
      <div className='entryContainer' onClick = {this.songChange}>
        <div className='libTitleBar'>
          <h2>{this.props.item.name}</h2>
        </div>
        <div className='imageContainer'>
          <img className="media-object" src={this.props.item.url} />
        </div>
        <div className='artistsContainer'>
          <br/><br/>
          <h4>{this.props.item.artists}</h4>
        </div>
        <div className='bpmContainer'>
          <br/><br/>
          <h4>{this.props.item.BPM}</h4>
        </div>
      </div>
    );
  }
}

export default MusicTrackListEntry;

        // <Panel header={this.props.item.name} onClick = {this.songChange}>
        //   <div className='col-sm-3' >
        //     <img className="media-object" src={this.props.item.url} style={{height: 100, width: 170}} />
        //   </div>
        //   <div className='col-sm-6'>
        //     {this.props.item.artist}
        //   </div>
        //   <div className='col-sm-3'>
        //     <h1>{this.props.item.BPM}</h1>
        //   </div>
        // </Panel>