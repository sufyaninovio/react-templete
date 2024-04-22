import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../constants/mediaConstants";
import { navItems } from "../../constants/data";
import { useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState();
  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <header className="without-login wow animate__animated animate__fadeInUp">
      <div className="sec-header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="top-100-web" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              aria-labelledby="offcanvasNavbarLabel"
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <ul className="navbar-nav ms-0 ms-lg-auto align-items-center h-100">
                {navItems?.map((item, i) =>
                  !item?.subItems ? (
                    <li className="nav-item" key={i}>
                      <Link
                        className={`nav-link ${
                          item?.className && item?.className
                        }`}
                        aria-current="page"
                        to={item?.link}
                      >
                        {item?.label}
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item dropdown" key={i}>
                      <span className="drop-item-icon d-flex">
                      <Link
                        aria-current="page"
                        to={item?.link}
                        className={`nav-link dropdown-toggle ${
                          item?.className && item?.className
                        }`}
                        
                        
                      >
                        {item?.label}
                      </Link>
                      <button  
                         className="drop-icon dropdown-toggle " onClick={toggleMenu}></button>
                      </span>
                      {item?.subItems && (
                        <ul className={`dropdown-menu ${(menu) ? 'active' : ''}`}>
                          {item?.subItems?.map((subItem, i) => (
                            <li key={i}>
                              <Link className="dropdown-item" to={subItem?.link}>
                                {subItem?.label}
                                <i className="fas fa-chevron-right"></i>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
