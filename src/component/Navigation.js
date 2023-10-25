import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personalities">
                Personalities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu2">
                Menu 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu3">
                Menu 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
