import { SIGNME_UP, LOGIN, LEAVE_GROUP, USER_JOIN_GROUP, LEAVE_USER_GROUP, JOIN_GROUPS } from '../actions/types';

const initialState = null

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNME_UP:
      return action.payload
    case LOGIN:
      return action.payload
    case JOIN_GROUPS:
      return action.payload.user
    case LEAVE_GROUP:
      const deletedGroup = action.payload
      const userGroups = state.groups
      const newUserGroups = userGroups.filter(group => {
        return group.id !== deletedGroup.group_id
      })
      return {...state, groups: newUserGroups}
    case LEAVE_USER_GROUP:
      const deletedUserGroupId = action.payload.user_group.id
      const copy = state.user_groups.filter(ug => ug.id !== deletedUserGroupId)

      return {...state, user_groups: copy}
    case USER_JOIN_GROUP:
      const addedGroup = { id: action.payload.id, name: action.payload.name }
      // console.log(addedGroup);
      const userGroupsArr = state.groups
       userGroupsArr.push(addedGroup)
      // console.log(userGroupsArr);
      return {...state, groups: userGroupsArr}
      // break;
    default:
      return state
  }
}

export default userReducer;
