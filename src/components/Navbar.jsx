import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/image1.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo" className="logo" />
        <h1>MyPortfolio</h1>
      </div>

      {/* Hamburger icon on right */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#resume" onClick={handleLinkClick}>Resume</a>
        <a href="#blog" onClick={handleLinkClick}>Blog</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
