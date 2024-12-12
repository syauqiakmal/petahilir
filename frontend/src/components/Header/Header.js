import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo White Text.png";
import LogoDark from "../assets/Logo Black Text.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="header"
      className={`header ${isScrolled ? "scrolled" : "transparent"}`}
    >
      <div id="header-row" className="header-row">
        <div id="logo">
          <a href="/" id="logo-link">
            <img
              id="logo-img"
              className="logo-default"
              src={isScrolled ? LogoDark : Logo}
              alt="Logo"
            />
          </a>
        </div>

        <div
          id="menu-trigger"
          className={`primary-menu-trigger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div id="hamburger-box" className="cnvs-hamburger-box">
            <div id="hamburger-inner" className="cnvs-hamburger-inner"></div>
          </div>
        </div>

        <nav
          id="primary-menu"
          className={`primary-menu ${menuOpen ? "show" : ""}`}
        >
          <ul id="menu-container" className="menu-container">
            <li id="menu-item-about" className="menu-item">
              <Link id="menu-link-about" className="menu-link" to="/about">
                About
              </Link>
            </li>
            <li id="menu-item-works" className="menu-item">
              <Link
                id="menu-link-works"
                className="menu-link"
                to="/contact"
                smooth={true}
              >
                Contact
              </Link>
            </li>
            <li id="menu-item-features" className="menu-item">
              <Link
                to="/mahadata-dan-kecerdasan-buatan/map/" // Rute internal
                className="menu-link"
                id="menu-link-features-visit-map"
              >
                VISIT MAP
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
