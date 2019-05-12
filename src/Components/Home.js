import React from 'react';
import {withRouter} from 'react-router-dom';

const Home = (props) => {
  let token = localStorage.getItem('token');

  const btnClick = () => {
    props.history.push("/signup")
  }

  return (
    <div>
      <div className="header">
        <h1>Welcome to Rosebud </h1>
        <p>The Movie App where it is safe to share spoilers!</p>
        {!!token ?
          null :
          <div className='funDiv'>
            <button className="ui massive purple button" onClick={btnClick}>
                New? Sign up!
            </button>
          </div>
          }
        </div>
          <img className="spin-image" alt="" src="https://res.cloudinary.com/ddmxdfzlm/image/upload/v1557330249/jiusvfj7018jricwbjud.png"/>
          <img className='popcorn' alt="" src="https://res.cloudinary.com/ddmxdfzlm/image/upload/v1557347076/fomo3exrj1pzkfe0rsoa.png" />
    </div>
  )
}

// <div className="ui massive purple button" onClick={btnClick}>
//   <Link to="/signup" className='text'>
//     New? Sign up!
//   </Link>
// </div>


export default withRouter(Home);
