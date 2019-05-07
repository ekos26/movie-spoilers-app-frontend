import { FETCH_GROUPS, SELECT_GROUP, JOIN_GROUPS, CREATE_GROUP, ADD_MOVIE_TO_GROUP, ADD_SPOILER_TO_MOVIE, LEAVE_USER_GROUP } from '../actions/types';

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
    const groups = [...state.groups].map(group => group.id === action.payload.group.id ? action.payload.group: group)
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
    const newPickedGroup = [...state.groups].find(group => group.id === state.selectedGroup)
    const pickedMovie = newPickedGroup.movies.find(movie => movie.id === action.payload.movie.id)
    pickedMovie.comments.push(action.payload)
    const alteredPickedMovies = newPickedGroup.movies.filter(movie => movie.id !== pickedMovie.id)
    const finalPickedGroup = [...alteredPickedMovies, pickedMovie]
    const newGroupsArray = [...state.groups].map(group => {
      if (group.id === finalPickedGroup.id) {
        return finalPickedGroup
      } else {
        return group
      }
    })
    return {...state, groups: newGroupsArray}

    case LEAVE_USER_GROUP:
      console.log('IN LEAVE USER GROUP action.payload', action.payload);
      console.log('IN LEAVE USER GROUP state', state);

      const deletedGroupId = action.payload.user_group.group_id
      // target group id
      console.log('delete group id', deletedGroupId)

      const deleteGroup = state.groups.find(group => group.id === deletedGroupId)
      // target group
      console.log('delete Group', deleteGroup)

      const indexTargetGroup = state.groups.indexOf(deleteGroup)
      // target group index
      console.log('group index', indexTargetGroup);

      const wantedUserId = action.payload.user.id
      // target user id
      console.log('user id', wantedUserId);

      const targetUser = deleteGroup.users.find(user => user.id === wantedUserId)
      // target user
      console.log('target user', targetUser)

      const targetUserIndex = deleteGroup.users.indexOf(targetUser)
      // target user index
      console.log('targetUserIndex', targetUserIndex)

      // wantedGroupInState.users.filter(user => {
      //   return user.id !== wantedUserId
      // })
      //
      // console.log(wantedGroupInState);

      // let newStateGroups = state.groups.map(group => {
      //   if (group.id === wantedGroupInState.id) {
      //     console.log('here and its the group we want');
      //     return wantedGroupInState
      //   } else {
      //     return group
      //   }
      //
      // })
      // console.log('NEW STATE GROUPS', newStateGroups);
      // const userGroups = state.groups
      // console.log('user groups', userGroups);
      // const newUserGroups = userGroups.filter(group => {
      //   return group.id !== deletedGroup.group_id
      // })
      return {
        ...state,
        groups: [
          ...state.groups.slice(0,indexTargetGroup),
          {
            ...state.groups[indexTargetGroup],
            users: [
              ...state.groups[indexTargetGroup].users.slice(0, targetUserIndex),
              ...state.groups[indexTargetGroup].users.slice(targetUserIndex+1),
            ]
          },
          ...state.groups.slice(indexTargetGroup+1)
        ]
      }
    default:
      return state
  }
}

export default groupsReducer;
