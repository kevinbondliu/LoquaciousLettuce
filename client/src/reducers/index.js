import {combineReducers} from 'redux';
import test from './example.js';
import UserReducer from './reducer-users';
import GameReducer from './reducer-game';
import ViewReducer from './reducer-view';
import ShowScoreModalReducer from './reducer-score-modal';
import SelectedUserReducer from './reducer-selected-user';
import HomeViewReducer from './reducer-home-view';
import MusicReducer from './reducer-music';
import LibraryReducer from './reducer-library';
import YoutubeReducer from './reducer-youtube';

//combined reducers comines all the files inside the reduce file and allReducer becomes the storage
const allReducers = combineReducers({
  //individual sub-storage
  users: UserReducer,
  selectedUser: SelectedUserReducer,
  game: GameReducer,
  view: ViewReducer,
  homeView: HomeViewReducer,
  showScoreModal: ShowScoreModalReducer,
  music: MusicReducer,
  library: LibraryReducer,
  youtube: YoutubeReducer
});

export default allReducers;
