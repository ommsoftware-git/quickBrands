import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget company-intro-widget">
                  <NavLink to="/" className="site-logo">
                    <img src="./images/logo.jpeg" alt="logo" />
                  </NavLink>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <ul class="social-links">
                    <li class="google">
                      <NavLink to="#">
                        <FaGooglePlusG />
                      </NavLink>
                    </li>
                    <li class="facebook">
                      <NavLink to="#">
                        <FaFacebookF />
                      </NavLink>
                    </li>
                    <li class="instagram">
                      <NavLink to="#">
                        <FaInstagram />
                      </NavLink>
                    </li>
                    <li class="twitter">
                      <NavLink to="#">
                        <FaTwitter />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">Quick Links</h5>
                  <ul className="courses-link-list mb-5">
                    <li>
                      <NavLink to="/">
                        <i className="fas fa-long-arrow-alt-right"></i>Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/templates">
                        <i className="fas fa-long-arrow-alt-right"></i>Templates
                        Media
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/pricing">
                        <i className="fas fa-long-arrow-alt-right"></i>Pricing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">
                        <i className="fas fa-long-arrow-alt-right"></i>
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/learn">
                        <i className="fas fa-long-arrow-alt-right"></i>
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget latest-news-widget">
                  <h5 className="widget-title">Popular Categories</h5>
                  <ul className="courses-link-list">
                    <li>
                      <NavLink to="/templates">
                        <i className="fas fa-long-arrow-alt-right"></i>
                        Flyer Maker
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/templates">
                        <i className="fas fa-long-arrow-alt-right"></i>Poster
                        Maker
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/templates">
                        <i className="fas fa-long-arrow-alt-right"></i>Brochure
                        Maker
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/templates">
                        <i className="fas fa-long-arrow-alt-right"></i>
                        Logo Maker
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/templates">
                        <i className="fas fa-long-arrow-alt-right"></i>
                        Youtube Thumbnail Maker
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget newsletter-widget">
                  <h5 className="widget-title">Support</h5>
                  <ul className="courses-link-list mb-5">
                    <li>
                      <NavLink to="/help-center">
                        <i className="fas fa-long-arrow-alt-right"></i>Help
                        Center
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <i className="fas fa-long-arrow-alt-right"></i>Contact
                        Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/whats-new">
                        <i className="fas fa-long-arrow-alt-right"></i>What's
                        New
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/reviews">
                        <i className="fas fa-long-arrow-alt-right"></i>
                        Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/refund-policy">Refunds Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cookie-policy">Cookie Policy</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-lg-start text-center ">
                <span className="copy-right-text">
                  © 2023 <NavLink to="">Quick Brands</NavLink> All Rights
                  Reserved.
                </span>
              </div>
              <div className="col-md-6 col-sm-6">
                <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                  <li>
                    <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
