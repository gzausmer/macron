import React from "react";
import { Link } from "react-router-dom";
import { AuthNav } from "./auth-nav";

export const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/keyboard">Keyboard</Link>
            </li>
          </nav>
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};
