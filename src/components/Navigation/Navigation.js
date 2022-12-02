import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
