import React from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';


class MusicTrackListEntry extends React.Component {
  render() {
    return (

  <div>
    <Panel header={'TROLLOLOLOLOLOLOL'}>
      <img className="media-object" src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" style={{height: 100, width: 170}} />
      TROLOLOLOLO OLOLOL OLOLOL 
    </Panel>
  </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(MusicTrackListEntry);

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