import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SelectPlayerSettings from './selectPlayerSettings.jsx';
import SelectLevelSettings from './selectLevelSettings.jsx';
import {Button, ButtonGroup} from 'react-bootstrap';

class Settings extends React.Component {
  render() {
    return (
      <div>
      <div className="settingsPage">Settingssssss Page</div>

      {this.props.view === 'playerSettings' ?
        <div>
          Hellooo world
          <SelectLevelSettings/>
          <Button><Link to='/musicSettings'>Next!</Link></Button>
        </div>
      :
        <div>
          Hellooo world 222222
          <SelectPlayerSettings/>
          <Button><Link to='/musicSettings'>Next!</Link></Button>
        </div>
      }
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