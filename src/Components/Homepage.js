import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="App">
      <h1>BOOOOK'S LIBRARY</h1>

      <Link to="/userlogin" className="link">
        User Login
      </Link>

      <Link to="/libriainlogin" className="link">
        Employee Login
      </Link>
    </div>
  );
};

export default Homepage;
