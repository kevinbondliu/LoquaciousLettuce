import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import {changePlayers} from '../actions/index';

class SelectPlayerSettings extends React.Component {
  render() {
    var changePlayers = this.props.changePlayers.bind(this);
    return (
      <div className = 'selectPlayerPage'>
        <div className="container">


          <div className="row">
            <div className="col-sm-12" style={{background: '#0066ff', height: 500}}>Game<br></br>
              <ButtonGroup vertical className="col-sm-12">
                <Button onClick={()=> {changePlayers(1); }} >Single Player</Button>
                <Button onClick={()=> {changePlayers(2); }}>MultiPlayer</Button>
              </ButtonGroup>
            </div>

            <Button><Link to='/selectLevelSettings'>Next!</Link></Button>
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
  return bindActionCreators({changePlayers: changePlayers}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SelectPlayerSettings);