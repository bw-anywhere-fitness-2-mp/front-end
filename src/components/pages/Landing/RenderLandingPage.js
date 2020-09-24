import React from 'react';
import { Link } from 'react-router-dom';

function RenderLandingPage(props) {
  return (
    <div className="App">
      <div className="header">
        <h1>Anywhere Fitness</h1>
      </div>
      <div>
        <p>
          {/* Adding a temporary break until we add our styling */}
          <Link to="/login">Login</Link> <br></br>
          <Link to="/">Home</Link> <br></br>
          <Link to="/example-list">Example List of Items</Link>
          <br></br>
          <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
