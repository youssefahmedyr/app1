import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg position-fixed w-100 custom-navbar ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold text-white fs-2">
          START FRAMEWORK
        </NavLink>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link fw-bold text-white px-3 py-2 rounded-3 ${isActive ? 'active-link' : ''}`}>
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => `nav-link fw-bold text-white px-3 py-2 rounded-3 ${isActive ? 'active-link' : ''}`}>
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link fw-bold text-white me-2 px-3 py-2 rounded-3 ${isActive ? 'active-link' : ''}`}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}