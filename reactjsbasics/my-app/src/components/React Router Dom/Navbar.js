import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/blogs">
        Blogs
      </NavLink>
      <NavLink className="nav-link" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/">
        Default
      </NavLink>
    </nav>
  );
};

export default Navbar;
