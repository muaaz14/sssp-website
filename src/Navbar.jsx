import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const handleDropdown = (name) => {
    setDropdown(dropdown === name ? "" : name);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="logo">🌟</span> {/* Dummy logo */}
        {/* <span className="navbar-title">Professionals Directory</span> */}
      </div>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="navbar-toggle-icon">☰</span>
      </button>
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="dropdown">
          <button onClick={() => handleDropdown("executive")}>Executive Council ▾</button>
          <ul className={`dropdown-menu${dropdown === "executive" ? " show" : ""}`}>
            <li><Link to="/executive/current">Current Executive Council</Link></li>
            <li><Link to="/executive/past">Past Executive Council</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <button onClick={() => handleDropdown("honors")}>Honors & Awards ▾</button>
          <ul className={`dropdown-menu${dropdown === "honors" ? " show" : ""}`}>
            <li><Link to="/honors/1">Award 1</Link></li>
            <li><Link to="/honors/2">Award 2</Link></li>
            <li><Link to="/honors/3">Award 3</Link></li>
            <li><Link to="/honors/4">Award 4</Link></li>
            <li><Link to="/honors/5">Award 5</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <button onClick={() => handleDropdown("icss")}>ICSS-24 ▾</button>
          <ul className={`dropdown-menu${dropdown === "icss" ? " show" : ""}`}>
            <li><Link to="/icss-24/info">ICSS-24 Info</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <button onClick={() => handleDropdown("newsletters")}>Newsletters ▾</button>
          <ul className={`dropdown-menu${dropdown === "newsletters" ? " show" : ""}`}>
            <li><Link to="/newsletters/1">Newsletter 1</Link></li>
            <li><Link to="/newsletters/2">Newsletter 2</Link></li>
            <li><Link to="/newsletters/3">Newsletter 3</Link></li>
          </ul>
        </li>
        <li><Link to="/professionals" className="active">Professionals Directory</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 