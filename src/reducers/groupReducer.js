import { SELECT_GROUP, JOIN_GROUPS, CREATE_GROUP } from '../actions/types';

const initialState = null;

const groupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_GROUP:
      return action.payload
    case JOIN_GROUPS:
      return action.payload
    case CREATE_GROUP:
      return action.payload
    default:
      return state
  }
}

export default groupReducer;
