import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeView} from '../actions/index.js';
import {Button, ButtonGroup, Navbar, FormGroup, FormControl} from 'react-bootstrap';


class MusicSettings extends React.Component {
  render() {
    var changeView = this.props.changeView.bind(this);
    return (
      <div className = 'musicSettingsPage'>
      MUSICCCCCCC SPOTIFYYYYYYYYYYY<br></br>
        <div className="col-sm-12" style={{ background: 'black', height: 500}}>
          <Navbar>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="text" placeholder="Song" />
                </FormGroup>
                {' '}
                <Button type="submit">Search</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Button onClick={changeView('difficulty')}></Button>
        
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeView: changeView}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicSettings);