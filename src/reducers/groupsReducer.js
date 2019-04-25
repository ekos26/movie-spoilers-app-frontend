import { FETCH_GROUPS, SELECT_GROUP } from '../actions/types';

const initialState = [];

const groupsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GROUPS:
      return action.payload
    case SELECT_GROUP:
      return action.payload
    default:
      return state
  }
}

export default groupsReducer;
