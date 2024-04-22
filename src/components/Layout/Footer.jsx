import React from "react";
import { contactInfo, footerLinks } from "../../constants/data";
import { Link } from "react-router-dom";
import { logo } from "../../constants/mediaConstants";

const Footer = () => {
  return (
    <footer>
      <div className="container over-hidden">
        <div className="row wow animate__animated animate__fadeInUp">
          <div className="col-lg-4 col-md-6 ">
            <div className="footer-content logo-content">
              <div className="logo-box">
                <Link to="/">
                  <figure>
                    <img
                      src={logo}
                      alt="footer-logo"
                      className="img-fluid"
                    />
                  </figure>
                </Link>
              </div>
              <p>
                At Top 100 Website Advertising, we're your dedicated partner in
                achieving online success through expert SEO services.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="footer-content">
              <ul className="menu-links menus quick-links">
                {footerLinks?.map((fooLinks, i) => (
                  <li key={i}>
                    <Link to={fooLinks?.link} className=" text-uppercase">{fooLinks?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-content">
              <form action="">
                <p>Subscribe To Our Newsletter</p>
                <div className="newsletter-footer">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="form-control"
                    />
                  </div>
                  <div className="button-group">
                    <button type="button" className="btn primary-btn">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <ul className="contact-info">
                {
                  contactInfo?.map((info, i) => (
                    <li key={i}>
                      <a href={info?.link} className="para text-white ">{info?.label}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright wow animate__animated animate__fadeInLeft">
          <p className=" text-center">
            Copyright © All Rights Reserved{" "}
            <span>{new Date().getFullYear()} </span>
            www.Top100WebsiteAdvertising.com{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
