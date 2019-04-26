import { FETCH_GROUPS, SELECT_GROUP, SIGNME_UP, LOGIN } from '../actions/types';

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

export const signmeUp = (user)=> {
  return dispatch => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        dispatch({
          type: SIGNME_UP,
          payload: data.user
        })
      })
  }
}

export const login = (user) => ({
  type: LOGIN, payload: user
})

export const autoLogin = () => {
  return dispatch => {
    fetch('http://localhost:3000/auto_login', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
          // dispatch({
          //   type: LOGIN, payload: data.user
          // })
      })
  }
}

// export const deletePainting = (paintingId) => {
//   return {type: DELETE_PAINTING, payload: paintingId}
// }
