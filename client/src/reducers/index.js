import {combineReducers} from 'redux';
import test from './example.js';

//combined reducers comines all the files inside the reduce file and allReducer becomes the storage
const allReducers = combineReducers({
  //individual sub-storage
  test: test
});

export default allReducers;