import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import Sound from 'react-sound';
import path from 'path';
//Example containers with React component as well how state is being passed down
class Audio extends Component {
  constructor(props) {
    super(props);
  }

  play() {
    var audio = document.createElement('audio');
    audio.src = 'file:///Users/kevinliu/HackReactor/LoquaciousLettuce/MusicFiles/U2.mp3';
    audio.play();
  }
  
  getAudio() {
    console.log('this was clicked');
    axios({
      method: 'get',
      url: '/audio',
      params: {
        audio: 'hello'
      }
    })
    .then(result => {
      console.log('HELLO IT REACHED HERE');
    });
  }
  
  
  render() {
    return (
    //pass in as a div
      <div>
        <button onClick = {this.getAudio.bind(this)}>Audio</button>
        <a href='//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=7IPNBW9fSvc'>
          <img src='//www.youtubeinmp3.com/icon/folder.png'/>
          <strong>Download MP3</strong>
        </a>
        <button onClick={this.play.bind(this)}>PlayMusic</button>
      
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