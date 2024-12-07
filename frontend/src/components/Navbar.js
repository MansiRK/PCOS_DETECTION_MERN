import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg desktop-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/images/pcos-logo.png"
              width={"160px"}
              height={"80px"}
              alt="logo"
            />
          </a>

          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Discover PCOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Take the Test
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Understanding PCOS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Our Story
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Get in Touch
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav class="navbar bg-body-tertiary fixed-top mobile-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/images/pcos-logo.png"
              width={"160px"}
              height={"80px"}
              alt="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <img
                src="/images/pcos-logo.png"
                width={"160px"}
                height={"80px"}
                alt="logo"
              />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Discover PCOS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Take the Test
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Understanding PCOS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Our Story
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Get in Touch
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
