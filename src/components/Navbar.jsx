import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (<>
    <nav className="nav">
      <Link to="/" className="title">
      <img className="logo" src={'/sve.jpeg'} />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          
          <Dropdown as={ButtonGroup} align={{ lg: 'end' }}
          >
          <NavLink to="/bussiness">Bussiness Vericals</NavLink>
      <Dropdown.Toggle id="drop"  />
        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>

        <li>
          <NavLink to="/contact" >Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
    <Footer />
  </>);
};