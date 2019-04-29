import { SIGNME_UP, LOGIN } from '../actions/types';

const initialState = null

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNME_UP:
      return action.payload
    case LOGIN:
    debugger
      return action.payload
    default:
      return state
  }
}

export default userReducer;
