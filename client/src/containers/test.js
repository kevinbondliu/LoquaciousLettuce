import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//Example containers with React component as well how state is being passed down
class Example extends Component {

  render() {
    return (
    //pass in as a div
      <div>{this.props.test}</div>
    );
  }
}

//this allows the component to receive the state items from the storage
var mapStateToProps = (state) => {
  return {
    //Test is the example data from ./reducers/index.js
    test: state.test
  };
};

//Have to always use connect to connect storage to the Example component
export default connect(mapStateToProps)(Example);