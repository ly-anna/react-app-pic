import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to="/">
      <button className="btn btn-link" type="button">
        Main
      </button>
    </NavLink>
    <NavLink to="/history">
      <button className="btn btn-link" type="button">
        History
      </button>
    </NavLink>
  </nav>
);

export default Navbar;
