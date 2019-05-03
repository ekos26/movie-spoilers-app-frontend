import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  groups: groupsReducer,
  user: userReducer
})

export default rootReducer;
