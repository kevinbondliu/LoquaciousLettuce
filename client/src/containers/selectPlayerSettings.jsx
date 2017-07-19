import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import {selectMode} from '../actions/index';

class SelectPlayerSettings extends React.Component {
  render() {
    return (
      <div className = 'selectPlayerPage'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12" style={{background: '#0066ff', height: 500}}>Game<br></br>
              <ButtonGroup vertical className="col-sm-12">
                <Button onClick={() => this.props.selectMode("single")}>Single Player</Button>
                <Button onClick={() => this.props.selectMode("multi")}>MultiPlayer</Button>
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
    view: state.view
  };
};

var mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({selectMode: selectMode}, selectMode);
  return {
    selectMode: (playerMode) => {dispatch(selectMode(playerMode))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerSettings);