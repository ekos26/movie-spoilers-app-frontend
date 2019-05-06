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
            <div className="ui large violet button">
              <Link to="/signup">
                New? Sign up!
              </Link>
            </div>
          </div>}

      </div>
    </div>
  )
}

export default Home;
