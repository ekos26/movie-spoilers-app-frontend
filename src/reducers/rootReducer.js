import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';

const rootReducer = combineReducers({
  groups: groupsReducer
})

export default rootReducer;
