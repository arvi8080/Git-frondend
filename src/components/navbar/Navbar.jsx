import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GitHubClone</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      {children && <div className="navbar-children">{children}</div>}
    </nav>
  );
};

export default Navbar;
