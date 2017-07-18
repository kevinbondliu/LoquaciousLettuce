import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../containers/test.js';
import Home from '../containers/home.js';
import Settings from '../containers/settings.js';
import Game from '../containers/game.jsx';
import Score from '../containers/score.js';
import {Link, IndexRoute, browserHistory, DefaultRoute} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Audio from '../containers/Audiotest.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/game' component={Game} />
            <Route path='/settings' component={Settings} />
            <Route path='/score' component={Score} />
          </div>  
        </Router>
        <Example/>
      </div>
    );
  }
}

export default App;
