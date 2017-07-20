import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeView} from '../actions/index.js';
import {Button, ButtonGroup, Navbar, FormGroup, FormControl, Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';
import MusicTrackList from './MusicTrackList.jsx';
import {getTracks} from '../actions/index';

class MusicSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    },
    this.getAudioBPM = this.getAudioBPM.bind(this);
    this.getAudioTrackID = this.getAudioTrackID.bind(this);
    // var getTracks = this.props.getTracks.bind(this);
  }

  getToken() {
    axios({
      method: 'get',
      url: '/tokenhere',
      contentType: 'json'
    })
    .then((response) => {
      var res = response;
      var accessToken = res.data.accessToken + '&refresh_token=' + res.data.refreshToken;
      this.getAudioTrackID(accessToken);
      // this.getAudioBPM(accessToken);
    });
  }

  getAudioTrackID(token) {

    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + 'shelter' + '&type=track&limit=5';
    var accessToken = token;

    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };
    this.props.getTracks(FETCH_URL, myOptions);
  }

  getAudioBPM(token) {
    console.log('this was clicked');

    const BASE_URL = 'https://api.spotify.com/v1/audio-features/5ChkMS8OtdzJeqyybCc9R5';
    const FETCH_URL = BASE_URL + 'q=' + 'michael jackson' + '&type=artist&limit=1';
    var accessToken = token;

    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };
    this.props.getTracks(BASE_URL, myOptions);
    // fetch(BASE_URL, myOptions)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     const artist = json.artists.items[0];        
    //     this.setState({ artist });
    //   });
  }


  getInitialState() {
    return {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    var changeView = this.props.changeView.bind(this);
    return (
      <div className = 'musicSettingsPage'>
      MUSICCCCCCC SPOTIFYYYYYYYYYYY<br></br>
      <div>
        <button onClick = {this.getAudioBPM.bind(this)}>Audio</button>
        <button onClick = {this.getToken.bind(this)}>Button</button>
      </div>
        <div className="col-sm-12" style={{ background: 'black', height: 500}}>
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
            <Tab eventKey={1} title="Library">
              <MusicTrackList className = 'container'></MusicTrackList>
            </Tab>
            <Tab eventKey={2} title="Find Track">
              <Navbar>
                <Navbar.Collapse>
                  <Navbar.Form pullLeft>
                    <FormGroup>
                      <FormControl type="text" placeholder="Song" />
                    </FormGroup>
                    {' '}
                  <Button type="submit">Search</Button>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
            </Tab>
          </Tabs>
        </div>
        <Button onClick={()=> {changeView('difficulty');}}>Back</Button>
        <Button onClick={()=>{changeView('difficulty'); }}>Waiting for Kevin to kick Spotify's butt. Go Kevin!!!</Button>
        <Button><Link to='/game'>Play!</Link></Button>
              <Button><Link to='/multiplayerGame'>MultiPlayer</Link></Button>

      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    music: state.music
  };
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeView: changeView, getTracks: getTracks}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(MusicSettings);
