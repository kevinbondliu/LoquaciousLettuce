import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className='homePage'>
      homePage!!!!!!<br></br>
        <Link to='/selectPlayerSettings'>Select Player Mode</Link>
        <audio autoPlay>
          <source src = 'U2.mp3' type ='audio/wav'/>
        </audio>
        <Link to='/settings'>Select Player Mode</Link>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Home);
