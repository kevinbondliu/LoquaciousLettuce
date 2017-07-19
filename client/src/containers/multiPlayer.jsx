import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import Game from './game.jsx';

class MultiPlayer extends React.Component {
  render() {
    return (
      <div className="multiPlayerPage">
        <Link to='/score'>Scores and Stats</Link>
        <br></br>

        <div className="col-sm-6" style={{background:'blue', height: 700}}>Game  <Game/> </div>
        <div className="col-sm-6" style={{background:'blue', height: 700}}>Game  <Game/> </div>

      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(MultiPlayer);


//      <div className="col-sm-6" style={{background:'blue', height: 500}}>Game</div>