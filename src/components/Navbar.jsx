import React, { useState, useEffect } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/sve.jpeg" alt="Srivelu Enterprises Logo" />
            <span className="company-name">Srivelu Enterprises</span>
          </Link>
          
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <Dropdown as={ButtonGroup} align={{ lg: 'end' }}>
                <NavLink to="/bussiness">Business Verticals</NavLink>
                <Dropdown.Toggle id="dropdown-toggle" />
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to='/bussiness/quality'>Quality</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to='/bussiness/equipment'>Equipment</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to='/bussiness/material'>Material</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};