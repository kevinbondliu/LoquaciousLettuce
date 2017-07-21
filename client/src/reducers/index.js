import {combineReducers} from 'redux';
import test from './example.js';
import UserReducer from './reducer-users';
import GameReducer from './reducer-game';
import ViewReducer from './reducer-view';
import ShowModalReducer from './reducer-score-modal';
import SelectedUserReducer from './reducer-selected-user';
import HomeViewReducer from './reducer-home-view';


//combined reducers comines all the files inside the reduce file and allReducer becomes the storage
const allReducers = combineReducers({
  //individual sub-storage
  users: UserReducer,
  selectedUser: SelectedUserReducer,
  game: GameReducer,
  view: ViewReducer,
  showScoreModal: ShowModalReducer,
  homeView: HomeViewReducer

});

export default allReducers;