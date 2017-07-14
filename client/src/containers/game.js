import React from 'react';
import { Redirect, Link } from 'react-router';
import $ from 'jquery';

import { Router, Switch, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToUser: false
    };
    // this.UserPass = {};
    // this.loginRequest = this.loginRequest.bind(this);
  }


  render() {

    return (
      <div className = 'gamePage'>
      gamePage GAME GAME<br></br>
        <Link to='/score'>Score</Link>
      </div>
    );
  }
}

export default Game;
