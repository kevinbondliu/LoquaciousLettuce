import {combineReducers} from 'redux';
import test from './example.js';
import UserReducer from './reducer-users';
import GameReducer from './reducer-game';
import ViewReducer from './reducer-view';


//combined reducers comines all the files inside the reduce file and allReducer becomes the storage
const allReducers = combineReducers({
  //individual sub-storage
  users: UserReducer,
  game: GameReducer,
  view: ViewReducer

});

export default allReducers;