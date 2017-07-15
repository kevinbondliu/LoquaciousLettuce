import React from 'react';
import { Redirect, Link } from 'react-router';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Router, Switch, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Settings extends React.Component {
  render() {
    return (
      <div className = 'settingsPage'>
      settingsPage<br></br>
      Pick a song!<br></br>
        <Link to='/game'>Play!</Link>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Settings);
