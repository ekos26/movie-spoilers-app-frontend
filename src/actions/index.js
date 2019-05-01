import { FETCH_GROUPS, SELECT_GROUP, SIGNME_UP, LOGIN, GET_USER, JOIN_GROUPS, CREATE_GROUP, ADD_MOVIE_TO_GROUP } from '../actions/types';

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

export const createGroup = (groupObj) => {
  return (dispatch) => {
    fetch('http://localhost:3000/groups', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: groupObj.name
      })
    })
    .then(res => res.json())
    .then(group => {
      dispatch({
        type: CREATE_GROUP,
        payload: group})
    })
    .catch(err => console.log(err));
  }
}

export const addMovie = (movieObj, groupObj) => {
  return (dispatch) => {
    fetch('http://localhost:3000/movie_groups', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        movie_id: movieObj.id,
        group_id: groupObj.id
      })
    })
    .then(res => res.json())
    .then(movie => {
      dispatch({
        type: ADD_MOVIE_TO_GROUP,
        payload: movie
      })
    })
    .catch(err => console.log(err));
  }
}

export const selectGroup = (groupId) => {
  return {type: SELECT_GROUP, payload: groupId}
}

export const joinGroups = (userObj, groupObj) => {
  return (dispatch) => {
    fetch('http://localhost:3000/user_groups', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        user_id: userObj.id,
        group_id: groupObj.id
      })
    })
    .then(res => res.json())
    .then(myGroups => {
      dispatch({
        type: JOIN_GROUPS,
        payload: myGroups})
    })
    .catch(err => console.log(err));
  }
}

export const joinGroupsWithComment = (comment, userObj, groupObj) => {
  return (dispatch) => {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        content: comment,
        user_id: userObj.id,
        group_id: groupObj.id
      })
    })
    .then(res => res.json())
    .then(myGroups => {
      dispatch({
        type: JOIN_GROUPS,
        payload: myGroups})
    })
  }
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

export const autoLogin = () => {
  return dispatch => {
    fetch('http://localhost:3000/auto_login', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          dispatch({ type: 'LOGIN', payload: data.user})
        }
      })
  }
}

// export const deletePainting = (paintingId) => {
//   return {type: DELETE_PAINTING, payload: paintingId}
// }
