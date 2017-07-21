import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeHomeView} from '../actions/index';
import {Button, ButtonGroup, FieldGroup, Form, FormControl, FormGroup, ControlLabel, Col, Checkbox} from 'react-bootstrap';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        SIGN UPPPPPP <br></br>
        Need to make an account.
       <Button bsStyle="link" onClick={ () => {this.props.changeHomeView('preSignUp')} }>Sign Up</Button>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    homeView: state.homeView
  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeHomeView: changeHomeView}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);