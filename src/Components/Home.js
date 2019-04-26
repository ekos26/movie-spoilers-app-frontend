import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Rosebud </h1>
        <p>The Movie App where it is safe to share spoilers!</p>
        <Link to="/signup">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Home;
