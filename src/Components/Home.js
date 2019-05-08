import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  let token = localStorage.getItem('token');

  return (
    <div>
      <div className="header">
        <h1>Welcome to Rosebud </h1>
        <p>The Movie App where it is safe to share spoilers!</p>
        {!!token ?
          null :
          <div className="sign">
            <div className="ui massive purple button">
              <Link className='text' to="/signup">
                New? Sign up!
              </Link>
            </div>
          </div>}
          <img className="spin-image" alt="" src="https://res.cloudinary.com/ddmxdfzlm/image/upload/v1557330249/jiusvfj7018jricwbjud.png"/>
          <img className='popcorn' alt="" src="https://res.cloudinary.com/ddmxdfzlm/image/upload/v1557347076/fomo3exrj1pzkfe0rsoa.png" />
      </div>
    </div>
  )
}

export default Home;
