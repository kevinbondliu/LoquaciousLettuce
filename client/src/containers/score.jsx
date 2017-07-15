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
      HIGH SCORE <br></br>
        <Link to='/settings'>PLAY AGAIN!</Link>
        <ScoreList />
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Score);
