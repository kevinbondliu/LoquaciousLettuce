import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ScoreList from './scoreList.jsx';

class Score extends React.Component {
  render() {
    return (

      <div className = 'scorePage'>
      <div id="title">Title</div>
        <div id="highScore">HIGH SCORE</div>
        <Link to='/settings'>PLAY AGAIN!</Link>
        <br></br>
          <ScoreList key={this.props.users.id}/>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Score);
