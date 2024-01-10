import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.webp'
import "./header.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header>
 <div className={`menu ${isOpen ? "open" : ""}`}>
      <div>
        <Link to="/dashboard" className="">
          <img src={logo} className="" alt="" />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className="menu-list">
        <Link to="/" >
          Home
        </Link>
        <Link to="/news" >
          Get to Know Us
        </Link>
        <Link to="/management" >
          Our Management
        </Link>
        <Link to="/career" >
          Careers
        </Link>
        <Link to="/faq" >
          Contact Us
        </Link>
      </div>
    </div>
    </header>
   
  );
};

export default Nav;
