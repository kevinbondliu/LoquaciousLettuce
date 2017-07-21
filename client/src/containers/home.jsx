import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PreSignUp from './preSignUp.jsx';
import PreLogin from './preLogin.jsx';
import SignUp from './SignUp.jsx';
import Login from './login.jsx';
import {Modal, Button, ButtonGroup, FieldGroup, Form, FormControl, FormGroup, ControlLabel, Col, Checkbox} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className='homePage'>
        homePage!!!!!!<br></br>
        <audio autoPlay>
          <source src = 'U2.mp3' type ='audio/wav'/>
        </audio>

        <div className="col-sm-2" style={{background:'white', height: 500}}></div>


          <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>TESSELL8</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  {this.props.homeView === 'preSignUp' ?
                    <div>
                      <PreSignUp />
                    </div>
                  : this.props.homeView === 'signUp' ?
                    <div>
                      <SignUp />
                    </div>
                  : this.props.homeView === 'preLogin' ?
                    <div>
                      <PreLogin />
                    </div>

                  : this.props.homeView === 'login' ?
                    <div>
                      <Login />
                    </div>
                  : <div>
                      No Home View Selected
                    </div>}

              </Modal.Body>


               <Modal.Footer>
               Sign in with Spotify<br></br>
                 Spotify Icon Component
                 <br></br>
                <Link to='/settings'>Select Player Mode</Link>
              </Modal.Footer>



            </Modal.Dialog>
          </div>



        <br></br>

      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    homeView: state.homeView
  };
};

export default connect(mapStateToProps)(Home);

    // <Button>Close</Button>
    // <Button bsStyle="primary">Save changes</Button>
