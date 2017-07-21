import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PreSignUp from './preSignUp.jsx';
import SignUp from './SignUp.jsx';
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
                <Modal.Title>Modal title</Modal.Title>
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
                  : <div>
                    No Home View Selected
                    </div>}

              </Modal.Body>

              <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
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



 // <div className="static-modal">
 //        <Modal.Dialog>
 //          <Modal.Header>
 //            <Modal.Title>Modal title</Modal.Title>
 //          </Modal.Header>

 //          <Modal.Body>
 //            One fine body...



 //        <form>
 //          <FormGroup>
 //            <ControlLabel>vusdkhfc</ControlLabel>
 //          </FormGroup>
 //        </form>



 //          </Modal.Body>

 //          <Modal.Footer>
 //            <Button>Close</Button>
 //            <Button bsStyle="primary">Save changes</Button>
 //          </Modal.Footer>

 //        </Modal.Dialog>
 //      </div>



 //    <div class="input-group">
            //   <span class="input-group-btn">
            //     <span class="btn btn-default btn-file">
            //       Browse <input type="file" id="imgInp">
            //     </span>
            //   </span>
            //     <input type="text" class="form-control" readonly>
            // </div>
            // <img id='img-upload'/>








        //     <br></br>
        // <div className="col-sm-2" style={{background:'white', height: 500}}></div>
        // <div className="col-sm-8" style={{background:'black', height: 500}}>

        //   <Form horizontal>
        //     <FormGroup controlId="formHorizontalEmail">
        //       <Col componentClass={ControlLabel} sm={2}>
        //           USERNAME
        //       </Col>
        //       <Col sm={10}>
        //         <FormControl type="username" placeholder="username" />
        //       </Col>
        //     </FormGroup>


        //      <div className="fileupload fileupload-new" data-provides="fileupload">
        //         <div>
        //           <Button className="btn btn-file">
        //           <input type="file" /></Button>
        //           <br></br>
        //           <a href="#" className="btn fileupload-exists" data-dismiss="fileupload">Remove</a>
        //         </div>
        //     </div>

        //     <br></br>

        //     <FormGroup>
        //       <Col smOffset={0} >
        //         <Button type="submit">
        //           <Link to='/settings'>Select Player Mode</Link>
        //         </Button>
        //       </Col>
        //     </FormGroup>
        //   </Form>

        // </div>
