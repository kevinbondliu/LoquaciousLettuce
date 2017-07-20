import React from 'react';
import {Panel} from 'react-bootstrap';


class MusicTrackListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }

  render() {
    return (

  <div>
    <Panel header={this.props.track.name}>
      <div className='col-sm-3' >
        <img className="media-object" src={this.props.track.album.images[0].url} style={{height: 100, width: 170}} />
      </div>
      <div className='col-sm-6'>
        {this.props.track.artists[0].name}
      </div>
      <div className='col-sm-3'>
        <h1>170</h1>
      </div>
    </Panel>
  </div>
    );
  }
}

export default MusicTrackListEntry;

      // <div className = 'MusicTrackEntry'>
      //   <div className='col-sm-3' style={{background: 'white'}}>
      //     <img className="media-object" src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" style={{height: 170, width: 220}} />
      //   </div>
      //   <div className ='col-sm-5' style= {{background: 'white'}}>
      //     <h1>Song Title: TROLLOLOLOLOLOLOL</h1>
      //     <h1>Artist: TROLLLILILI</h1>
      //   </div>
      //   <div className ='col-sm-3' style= {{background: 'white'}}>
      //     <h2>BPM</h2>
      //   </div>  
      // </div>