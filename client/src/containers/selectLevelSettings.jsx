import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';

class SelectLevelSettings extends React.Component {
  render() {
    return (
      <div className = 'selectLevelPage'>
        <div className="container">


          <div className="row">
            <div className="col-sm-12" style={{background:'#0066ff', height: 500}}>Level<br></br>
              <ButtonGroup vertical className="col-sm-12">
                <Button>Super Beginner</Button>
                <Button>Beginner</Button>
                <Button>Intermediate</Button>
                <Button>Advanced</Button>
                <Button>RockStar</Button>
              </ButtonGroup>
            </div>
            <Button><Link to='/selectPlayerSettings'>Back!</Link></Button>
            <Button><Link to='/musicSettings'>Next!</Link></Button>
          </div>


        </div>



      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(SelectLevelSettings);
