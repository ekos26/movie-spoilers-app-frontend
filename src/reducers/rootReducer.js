import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';
import groupReducer from './groupReducer';
import userReducer from './userReducer';
import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
  groups: groupsReducer,
  selectedGroup: groupReducer,
  user: userReducer,
  myGroups: groupReducer,
  movies: moviesReducer,
  movie: movieReducer
})

export default rootReducer;
