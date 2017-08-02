import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import {changeDifficulty, changeView} from '../actions/index';

class SelectLevelSettings extends React.Component {

  render() {
    var woosh = new Audio("assets/sfx/Woosh.wav");
    woosh.play(); 
    var changeDiff = this.props.changeDifficulty.bind(this);
    var changeView = this.props.changeView.bind(this);
    return (
      <div className = 'selectLevelPage'>
        <div className="settingContainer">
          <div className="levelChangeDiv" onClick={()=> {changeDiff('super_beginner'); changeView('song'); } } >
            <br/>
            <h4>Super Beginner</h4>
          </div>
          <div className="levelChangeDiv" onClick={()=> {changeDiff('beginner'); changeView('song'); } }>
            <br/>
            <h4>Beginner</h4>
          </div>
          <div className="levelChangeDiv" onClick={()=> {changeDiff('intermediate'); changeView('song'); } }>
            <br/>
            <h4>Intermediate</h4>
          </div>
          <div className="levelChangeDiv" onClick={()=> {changeDiff('advanced'); changeView('song'); } }>
            <br/>
            <h4>Advanced</h4>
          </div>
          <div className="levelChangeDiv" onClick={()=> {changeDiff('rockstar'); changeView('song'); } }>
            <br/>
            <h4>Rockstar</h4>
          </div>
          <div className="levelChangeDiv" onClick={()=> {changeView('players');}}>
           <br/>
            <h4>Back</h4>
          </div>

        </div>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    game: state.game
  };
};

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({changeDifficulty: changeDifficulty, changeView: changeView}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SelectLevelSettings);

// <div id="lvlSettingsBox" className="col-sm-12" style={{background:'#1a1a1a', height: 280}}>Level<br></br>
//   <ButtonGroup vertical className="col-sm-12">
//     <Button className="levelChoiceBtn" onClick={()=> {changeDiff('super_beginner'); changeView('song'); } } >Super Beginner</Button>
//     <Button className="levelChoiceBtn" onClick={()=> {changeDiff('beginner'); changeView('song'); } }>Beginner</Button>
//     <Button className="levelChoiceBtn" onClick={()=> {changeDiff('intermediate'); changeView('song'); } }>Intermediate</Button>
//     <Button className="levelChoiceBtn" onClick={()=> {changeDiff('advanced'); changeView('song'); } }>Advanced</Button>
//     <Button className="levelChoiceBtn" onClick={()=> {changeDiff('rockstar'); changeView('song'); } }>RockStar</Button>
//   </ButtonGroup>
//   <ButtonGroup className="col-sm-3">
//     <Button className="levelChoiceBtn" onClick={()=> {changeView('players');}}>Back</Button>
//   </ButtonGroup>
// </div>