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
            <div id="titleBar" className="col-sm-8-offset-2" >Game<br></br>
              <div className="playerBox" style={{background:'#1a1a1a', height: 120}}>
                <ButtonGroup vertical className="col-sm-12">
                  <Button className="playerChoiceBtn" onClick={()=> {changePlayers(1); changeView('difficulty'); } }>Single Player</Button>
                  <Button className="playerChoiceBtn" onClick={()=> {changePlayers(2); changeView('difficulty'); } }>MultiPlayer</Button>
                </ButtonGroup>
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

