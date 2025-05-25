// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../assets/image1.jpg';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo" className="logo" />
        <h1>MyPortfolio</h1>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
