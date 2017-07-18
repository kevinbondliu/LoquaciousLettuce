import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';

class SelectPlayerSettings extends React.Component {
  render() {
    return (
      <div className = 'selectPlayerPage'>
        <div className="container">


          <div className="row">
            <div className="col-sm-12" style={{background: '#0066ff', height: 500}}>Game<br></br>
              <ButtonGroup vertical className="col-sm-12">
                <Button>Single Player</Button>
                <Button>MultiPlayer</Button>
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

  };
};

export default connect(mapStateToProps)(SelectPlayerSettings);