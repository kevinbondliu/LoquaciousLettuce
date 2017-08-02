import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import {changePlayers, changeView} from '../actions/index';
import {selectMode} from '../actions/index';


class SelectPlayerSettings extends React.Component {
  render() {
    var woosh = new Audio("assets/sfx/Woosh.wav");
    woosh.play(); 
    var click = new Audio("assets/sfx/Click.mp3"); 
    var changePlayers = this.props.changePlayers.bind(this);
    var changeView = this.props.changeView.bind(this);
    return (
      <div className = 'selectPlayerPage'>

        <div className="playerContainer">
          <div className="row">
              <div className="playerBox">
                <div className='singlePlayerBox' onClick={()=> {changePlayers(1); changeView('difficulty');}}>
                  <br/>
                  <h3>Single-Player</h3>
                  <div className='imgContainer'>
                    <img src="assets/pics/singlePlayer.gif" height = "200" width="200"></img>
                  </div>
                </div>
                <div className='multiPlayerBox' onClick={()=> {changePlayers(2); changeView('difficulty');}}>
                  <br/>
                  <h3>Multi-Player</h3>
                  <div className='imgContainerMulti'>
                    <img src="assets/pics/multiPlayer.gif" height = "260" width="280"></img>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    game: state.game,
    view: state.view
  };
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changePlayers: changePlayers, changeView: changeView}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerSettings);

// var mapDispatchToProps = (dispatch) => {
//   // return bindActionCreators({selectMode: selectMode}, dispatch);
//   // return {
//   //   selectMode: (playerMode) => {dispatch(selectMode(playerMode))}
//   // }
// };

                // <ButtonGroup vertical className="col-sm-6">
                //   <Button className="multiPlayerChoiceBtn" onClick={()=> {changePlayers(2); changeView('difficulty'); } }>MultiPlayer</Button>
                // </ButtonGroup>

