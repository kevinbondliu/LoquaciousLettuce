import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import {changeDifficulty} from '../actions/index';

class SelectLevelSettings extends React.Component {

  render() {
    var changeDiff = this.props.changeDifficulty.bind(this);
    return (
      <div className = 'selectLevelPage'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12" style={{background:'#0066ff', height: 500}}>Level<br></br>

              <ButtonGroup vertical className="col-sm-12">
                <Button onClick={()=> {changeDiff('super_beginner'); } } >Super Beginner</Button>
                <Button onClick={()=> {changeDiff('beginner'); } }>Beginner</Button>
                <Button onClick={()=> {changeDiff('intermediate'); } }>Intermediate</Button>
                <Button onClick={()=> {changeDiff('advanced'); } }>Advanced</Button>
                <Button onClick={()=> {changeDiff('rockstar'); } }>RockStar</Button>
              </ButtonGroup>

            </div>
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
  return bindActionCreators({changeDifficulty: changeDifficulty}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SelectLevelSettings);
