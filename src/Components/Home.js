import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  let token = localStorage.getItem('token');

  return (
    <div>
      <div>
        <h1>Welcome to Rosebud </h1>
        <p>The Movie App where it is safe to share spoilers!</p>
        {!!token ?
          null : <Link to="/signup">
            Signup
          </Link>}

      </div>
    </div>
  )
}

export default Home;
