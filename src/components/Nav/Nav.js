import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ offset, handleScroll }) => {
  const [toggle, setToggle] = useState(false);
  const [dropDownToggle, setdropDownToggle] = useState(false);
  const [deepDropDownToggle, setDeepDropDownToggle] = useState(false);

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add(`${classes.active}`);
      } else {
        navbarlink.classList.remove(`${classes.active}`);
      }
    });
  };

  useEffect(() => {
    navbarlinksActive();
    handleScroll(navbarlinksActive());
  });

  const openMobileNavbar = () => {
    setToggle(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileNavbar = () => {
    setToggle(false);
    document.body.style.overflow = "visible";
  };

  return (
    <header
      id="header"
      className={`${offset > 20 ? classes.headerScrolled : ""}
   ${classes.header} fixed-top`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a
          href="/#"
          // href="index.html"
          className={`${classes.logo} `}
        >
          <img src={logo} alt="" />
          <span className={classes.flexStart}>FlexStart</span>
        </a>

        <nav
          id="navbar"
          className={`${classes.navbar} ${toggle ? classes.navbarMobile : ""}`}
        >
          <ul className={toggle ? classes.ulBlock : ""}>
            <li>
              <a
                className={`${classes.active} nav-link scrollto `}
                href="#hero"
                onClick={closeMobileNavbar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#about"
                onClick={closeMobileNavbar}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#services"
                onClick={closeMobileNavbar}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#portfolio"
                onClick={closeMobileNavbar}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#team"
                onClick={closeMobileNavbar}
              >
                Team
              </a>
            </li>
            <li>
              <NavLink to="/blogs" exact onClick={closeMobileNavbar}>
                Blog
              </NavLink>
            </li>
            <li className={classes.dropdown}>
              <a
                href="/#"
                onClick={() => {
                  setdropDownToggle(!dropDownToggle);
                  console.log(dropDownToggle);
                }}
              >
                <span>Drop Down</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={classes.icon}
                />
              </a>
              <ul className={dropDownToggle ? classes.dropdownActive : ""}>
                <li>
                  <a href="/#" onClick={closeMobileNavbar}>
                    Drop Down 1
                  </a>
                </li>
                <li className={classes.dropdown}>
                  <a
                    href="/#"
                    onClick={() => setDeepDropDownToggle(!deepDropDownToggle)}
                  >
                    <span>Deep Drop Down</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={classes.icon}
                    />
                  </a>
                  <ul
                    className={deepDropDownToggle ? classes.dropdownActive : ""}
                  >
                    <li>
                      <a href="/#" onClick={closeMobileNavbar}>
                        Deep Drop Down 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" onClick={closeMobileNavbar}>
                        Deep Drop Down 2
                      </a>
                    </li>
                    <li>
                      <a href="/#" onClick={closeMobileNavbar}>
                        Deep Drop Down 3
                      </a>
                    </li>
                    <li>
                      <a href="/#" onClick={closeMobileNavbar}>
                        Deep Drop Down 4
                      </a>
                    </li>
                    <li>
                      <a href="/#" onClick={closeMobileNavbar}>
                        Deep Drop Down 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#" onClick={closeMobileNavbar}>
                    Drop Down 2
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={closeMobileNavbar}>
                    Drop Down 3
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={closeMobileNavbar}>
                    Drop Down 4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={closeMobileNavbar}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className={`${classes.getstarted} scrollto`}
                href="#about"
                onClick={closeMobileNavbar}
              >
                Get Started
              </a>
            </li>
          </ul>
          <FontAwesomeIcon
            onClick={openMobileNavbar}
            icon={faBars}
            className={`${classes.mobileNavToggle} ${
              toggle ? classes.biX : ""
            }`}
          />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
