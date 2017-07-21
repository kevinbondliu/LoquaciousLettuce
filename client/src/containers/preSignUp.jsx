import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeHomeView} from '../actions/index';
import {Button, ButtonGroup, FieldGroup, Form, FormControl, FormGroup, ControlLabel, Col, Checkbox} from 'react-bootstrap';

class PreSignUp extends React.Component {
  render() {
    // var changeHomeView = this.props.changeHomeView.bind(this);
    return (
      <div>
        PREEEEE SignUp <br></br>

        <Button bsStyle="link" onClick={ () => {this.props.changeHomeView('signUp')} }>SIGN UP WITH EAMAIL</Button>
        <br></br>
        Already have an account.
        <Button bsStyle="link" onClick={ () => {this.props.changeHomeView('signUp')} }>Login</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PreSignUp);