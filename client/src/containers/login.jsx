import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeHomeView} from '../actions/index';
import {Button, ButtonGroup, FieldGroup, form, FormControl, FormGroup, ControlLabel, Col, Checkbox} from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
      <div>
        Loginnnnnnnnnnnnnnnn
        <form action="/login" method="post">
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password"/>
            </div>

            <button type="submit" className="btn btn-warning btn-lg">Login</button>
        </form>
        <Button onClick={ () => {this.props.changeHomeView('preLogin')} }>BACK</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);