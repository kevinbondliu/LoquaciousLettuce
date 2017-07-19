import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import path from 'path';
//Example containers with React component as well how state is being passed down
class Audio extends Component {
  constructor(props) {
    super(props);
    this.getAudio = this.getAudio.bind(this);
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
      this.getAudio(accessToken);
    });
  }

  getAudio(token) {
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
    fetch(BASE_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const artist = json.artists.items[0];        
        this.setState({ artist });
      });
  }
  
  
  render() {
    return (
    //pass in as a div
      <div>
        <button onClick = {this.getAudio.bind(this)}>Audio</button>
        <button onClick = {this.getToken.bind(this)}>Button</button>
      </div>
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
export default connect(mapStateToProps)(Audio);


        // <a href='//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=7IPNBW9fSvc'>
        //   <img src='//www.youtubeinmp3.com/icon/folder.png'/>
        //   <strong>Download MP3</strong>
        // </a>