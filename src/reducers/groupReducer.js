import { SELECT_GROUP } from '../actions/types';

const initialState = null;

const groupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_GROUP:
    console.log('here', action);
      return action.payload
    default:
      return state
  }
}

export default groupReducer;
