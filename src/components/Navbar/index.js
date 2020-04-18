import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css"

function NavTabs() {
  const location = useLocation();
 
  return (
    <div>
      <nav className="navbar level" id="navBurger">
        <div className="navbar-brand">
          <div className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu level-right" id="navbarMenu">
          <div className="navbar-end">
            <div className="navbar-item level-item">
              <Link
                to="/React-Portfolio"
                className={
                  location.pathname === "/React-Portfolio"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                Home
              </Link>
            </div>
            <div className="navbar-item level-item">
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                About
              </Link>
            </div>
            <div className="navbar-item level-item">
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                Portfolio
              </Link>
            </div>
            <div className="navbar-item level-item">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
