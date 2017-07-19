import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../containers/test.jsx';
import Home from '../containers/home.jsx';
import SelectPlayerSettings from '../containers/selectPlayerSettings.jsx';
import SelectLevelSettings from '../containers/selectLevelSettings.jsx';
import MusicSettings from '../containers/musicSettings.jsx';
import Game from '../containers/game.jsx';
import Audio from '../containers/Audiotest.jsx';
import Score from '../containers/score.jsx';
import {Link, IndexRoute, browserHistory, DefaultRoute} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/selectPlayerSettings' component={SelectPlayerSettings} />
            <Route path='/selectLevelSettings' component={SelectLevelSettings} />
            <Route path='/musicSettings' component={MusicSettings} />
            <Route path='/game' component={Game} />
            <Route path='/score' component={Score} />
            <Route path='/audio' component={Audio}/>
          </div>
        </Router>
        <Example/>
      </div>
    );
  }
}

export default App;
