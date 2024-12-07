import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-6 mt-lg-0 mt-4">
                <div className="footer-text">
                  <h2>Why use PCOSCare?</h2>
                  <p>
                    PCOSCare empowers women with personalized health insights
                    and early detection tools, helping you manage PCOS
                    effectively. Our AI-driven predictions and expert resources
                    are designed to support you on your journey to better
                    health.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 mt-lg-0 mt-4 d-flex justify-content-lg-end justify-content-start">
                <div className="quick-links">
                  <ul className="navbar-nav ">
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

            <div className="row align-items-center">
              <div className="col-lg-6 d-flex mt-lg-0 mt-4">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src="/images/pcos-logo.png"
                    width={"280px"}
                    height={"130px"}
                    alt="logo"
                  />
                </NavLink>
              </div>

              <div className="col-lg-6 mt-lg-0 mt-4">
                <div className="row align-items-center">
                  <div className="contact-details col-lg-6 mt-lg-0 mt-4 d-flex justify-content-lg-end justify-content-start">
                    <NavLink to="/">
                      <i class="fa-solid fa-envelope"></i>
                      pcoscare@gmail.com
                    </NavLink>
                  </div>

                  <div className="social-media col-lg-6 mt-lg-0 mt-4 d-flex justify-content-lg-end justify-content-start">
                    <NavLink to="/">
                      <i class="fa-brands fa-square-instagram"></i>
                    </NavLink>

                    <NavLink to="/">
                      <i class="fa-brands fa-youtube"></i>
                    </NavLink>

                    <NavLink to="/">
                      <i class="fa-brands fa-facebook"></i>
                    </NavLink>

                    <NavLink to="/">
                      <i class="fa-brands fa-square-whatsapp"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="row small-footer-text">
              <p>
                PCOSCare is not a substitute for professional medical advice.
                Please consult a healthcare provider for diagnosis and
                treatment.
              </p>

              <p>© 2024 PCOSCare. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
