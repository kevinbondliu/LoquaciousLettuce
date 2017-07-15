import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../containers/test.js';
import Home from '../containers/home.js';
import Settings from '../containers/settings.js';
import Game from '../containers/game.jsx';
import Score from '../containers/score.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/game' component={Game} />
          <Route path='/settings' component={Settings} />
          <Route path='/score' component={Score} />
        </Router>
        <Example/>
      </div>
    );
  }
}

export default App;
