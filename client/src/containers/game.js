import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //redirectTo: false
    };

  }
  render() {

    return (
      <div className = 'gamePage'>
      gamePage GAME GAME<br></br>
        <Link to='/score'>Scores</Link>
        <audio autoPlay>
          <source src = 'U2.mp3' type ='audio/wav'/>
        </audio>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Game);
