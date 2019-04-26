import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';
import groupReducer from './groupReducer';


const rootReducer = combineReducers({
  groups: groupsReducer,
  selectedGroup: groupReducer
})

export default rootReducer;
