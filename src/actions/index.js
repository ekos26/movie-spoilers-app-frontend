import { FETCH_GROUPS, SELECT_GROUP, SIGNME_UP, LOGIN, GET_USER } from '../actions/types';

export const fetchGroups = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/groups')
    .then(res => res.json())
    .then(groups => {
      dispatch({
        type: FETCH_GROUPS,
        payload: groups})
    })
  }
}

export const selectGroup = (groupId) => {
  return {type: SELECT_GROUP, payload: groupId}
}

export const getUser = (currentUsername) => { //username mitch
  return (dispatch) => {
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(users => {
      let userId;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUsername) {
          userId = users[i].id;
        }
      }
      console.log('userID', userId);
      dispatch({
        type: GET_USER,
        payload: userId})
    })
  }
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
        localStorage.setItem('token', data.token)
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

// export const autoLogin = () => {
//   return dispatch => {
//     fetch('http://localhost:3000/api/auto_login', {
//       headers: {
//         'Authorization': localStorage.getItem('token')
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.errors) {
//           alert(data.errors)
//         } else {
//           dispatch({ type: 'LOGIN', payload: data.user})
//         }
//       })
//   }
// }

// export const deletePainting = (paintingId) => {
//   return {type: DELETE_PAINTING, payload: paintingId}
// }
