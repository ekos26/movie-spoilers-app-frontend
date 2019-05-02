import { FETCH_GROUPS } from '../actions/types';

const initialState = [];

const groupsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GROUPS:
      return action.payload
    // case ADD_MOVIE_TO_GROUP
    //   [...state, action.payload]
    default:
      return state
  }
}

export default groupsReducer;
