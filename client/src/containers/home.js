import React from 'react';
import { Redirect, Link } from 'react-router';
import $ from 'jquery';

import { Router, Switch, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className = 'scorePage'>
      homePage!!!!!!<br></br>
        <Link to='/settings'>Go To Settings!</Link>
      </div>
    );
  }
}

export default Home;
