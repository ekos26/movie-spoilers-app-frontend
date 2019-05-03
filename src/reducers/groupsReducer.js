import { FETCH_GROUPS, SELECT_GROUP, JOIN_GROUPS, CREATE_GROUP, ADD_MOVIE_TO_GROUP, ADD_SPOILER_TO_MOVIE } from '../actions/types';

const initialState = {
  groups: [],
  selectedGroup: null
};

const groupsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GROUPS:
      return {...state, groups: action.payload}
    case SELECT_GROUP:
      return {...state, selectedGroup: action.payload}
    case CREATE_GROUP:
      return {...state, groups: [...state.groups, action.payload]}
    case JOIN_GROUPS:
    const groups = [...state.groups].map(group => group.id === action.payload.id ? action.payload: group)
      return {...state, groups}
    case ADD_MOVIE_TO_GROUP:
      const pickedGroup = [...state.groups].find(group => group.id === state.selectedGroup)
      pickedGroup.movies.push(action.payload)
      const newGroupsArr = [...state.groups].map(group => {
        if (group.id === pickedGroup.id) {
          return pickedGroup
        } else {
          return group
        }
      })
      return {...state, groups: newGroupsArr}

    case ADD_SPOILER_TO_MOVIE:
    debugger
    return state

    default:
      return state
  }
}

export default groupsReducer;
