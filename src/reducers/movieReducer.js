import { ADD_MOVIE } from '../actions/types';

const initialState = null;

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MOVIE:
      return action.payload
    default:
      return state
  }
}

export default movieReducer;
