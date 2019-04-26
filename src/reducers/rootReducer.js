import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';
import groupReducer from './groupReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  groups: groupsReducer,
  selectedGroup: groupReducer,
  user: userReducer
})

export default rootReducer;
