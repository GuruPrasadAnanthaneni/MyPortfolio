
import React from 'react';
import './Home.css';
import profileImage from '../assets/image1.jpg'; 

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <h1>Hi, I'm Ananthaneni Guru Prasad</h1>
        <p>Turning ideas into reality through code</p>
        <div className="home-buttons">
          <a href="/Resume.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
