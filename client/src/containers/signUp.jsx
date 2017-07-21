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

        <form>
          <FormGroup>
            <FormControl type="text" placeholder="Email">
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl type="text" placeholder="Confirm Email">
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl type="text" placeholder="Password">
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl type="text" placeholder="Username">
            </FormControl>
          </FormGroup>

          <FormGroup>
            <label className="control-label">Select Profile Image</label>
              <FormControl type="file" placeholder="Image" className="file">

              </FormControl>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>



        </form>





        <Button onClick={ () => {this.props.changeHomeView('preSignUp')} }>BACK</Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);