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

  getAudio() {
    console.log('this was clicked');
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        client_id: '11720c2bf44e4eb2891f29bc59d94a29',
        client_secret: '26c54b955e564174b7ab1cad61516925'
      },
      data: {
        grant_type: 'authorization_code',
        code: 'kK27foGh8',
        redirect_uri: 'http://localhost:3000/auth/spotify/callback'

      }
    })
    .then(result => {
      console.log(result);
      console.log('HELLO IT REACHED HERE');
    });
  }
  
  
  render() {
    return (
    //pass in as a div
      <div>
        <button onClick = {this.getAudio.bind(this)}>Audio</button>
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