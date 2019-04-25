import { FETCH_GROUPS, SELECT_GROUP } from '../actions/types';

export const fetchGroups = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/groups')
    .then(res => res.json())
    .then(groups => {
      dispatch({type: FETCH_GROUPS, payload: groups})
    })
  }
}

export const selectGroup = (groupId) => {
  return {type: SELECT_GROUP, payload: groupId}
}

// export const deletePainting = (paintingId) => {
//   return {type: DELETE_PAINTING, payload: paintingId}
// }
