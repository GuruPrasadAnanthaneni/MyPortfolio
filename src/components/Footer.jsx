import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
