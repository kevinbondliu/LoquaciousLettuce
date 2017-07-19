import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import path from 'path';
//Example containers with React component as well how state is being passed down
class Audio extends Component {
  constructor(props) {
    super(props);
  }

  getToken() {
    axios({
      method: 'get',
      url: '/tokenhere',
      contentType: 'json'
    })
    .then((response) => {
      console.log(response.data);
    });
  }

  getAudio() {
    console.log('this was clicked');

    const BASE_URL = 'https://api.spotify.com/v1/audio-features/24FgOhhZMtFcfg5nKcsMZD';
    const FETCH_URL = BASE_URL + 'q=' + 'michael jackson' + '&type=artist&limit=1';
    var accessToken = 'BQAR2mm-LqkCzTLJLyxWkhdFrQZW-mAhs-m5K9IVIx2Mvcg38fL8Am6RR-PFXHHNQT8ahPlOzmSkbb5QSWngICnPGN0Qc1POvm-NzjgpfetFDcy14LnJVWaqJGoR98Mo8tmm0sdZQnlLeP31LsgI6ZxGGulCsA&refresh_token=AQC0nDwwEoQbwLV48gbwTgnoYVQbHU4BW-i34DhzFmtzGmk3mwA69HfzivTybw21K9Gro-JJKYRptuOQZoIaMU7SodSoZfylDeeteg9kAv5zXj7NykcsnAOgomGICFt6OC8';

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