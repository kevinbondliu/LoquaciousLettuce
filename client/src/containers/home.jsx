import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className = 'homePage'>
      homePage!!!!!!<br></br>
<<<<<<< HEAD:client/src/containers/home.jsx
        <Link to='/selectPlayerSettings'>Select Player Mode</Link>
=======
              <audio autoPlay>
          <source src = 'U2.mp3' type ='audio/wav'/>
        </audio>
        <Link to='/settings'>Go To Settings!</Link>
>>>>>>> testing spotify:client/src/containers/home.js
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Home);
