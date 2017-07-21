import {combineReducers} from 'redux';
import test from './example.js';
import UserReducer from './reducer-users';
import GameReducer from './reducer-game';
import ViewReducer from './reducer-view';
import ShowModalReducer from './reducer-score-modal';
import SelectedUserReducer from './reducer-selected-user';
import HomeViewReducer from './reducer-home-view';
import MusicReducer from './reducer-music';

//combined reducers comines all the files inside the reduce file and allReducer becomes the storage
const allReducers = combineReducers({
  //individual sub-storage
  users: UserReducer,
  selectedUser: SelectedUserReducer,
  game: GameReducer,
  view: ViewReducer,
  homeView: HomeViewReducer,
  showScoreModal: ScoreModalReducer,
  music: MusicReducer
});

export default allReducers;