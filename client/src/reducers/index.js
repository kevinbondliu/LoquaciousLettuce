import {combineReducers} from 'redux';
import test from './example.js';
import UserReducer from './reducer-users'

//combined reducers comines all the files inside the reduce file and allReducer becomes the storage
const allReducers = combineReducers({
  //individual sub-storage
  users: UserReducer,
  playerMode: 'single',
  view: 'playerSettings' //chooseLevel
});

export default allReducers;