import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SelectPlayerSettings from './selectPlayerSettings.jsx';
import SelectLevelSettings from './selectLevelSettings.jsx';
import MusicSettings from './musicSettings.jsx';
import {Button, ButtonGroup} from 'react-bootstrap';

class Settings extends React.Component {
  render() {
    console.log('THIS IS VIEW', this.props.view);
    return (
      <div>
        <div className="settingsPage">Settings Page</div>
        {this.props.view === 'players' ?
          <div>
            Player Count
            <SelectPlayerSettings/>
          </div>
        : this.props.view === 'song' ?
          <div>
            Music Settings
            <MusicSettings/>
          </div>
        : this.props.view === 'difficulty' ?
          <div>
          Level Settings
            <SelectLevelSettings/>
            </div>
          : <div>
            No View is Selected
          </div>}
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Settings);