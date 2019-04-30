import { FETCH_MOVIES } from '../actions/types';

const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return action.payload
    default:
      return state
  }
}

export default moviesReducer;
