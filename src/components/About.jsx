import React from 'react';
import './About.css';
import profileImage from '../assets/image3.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-cards">
        <div className="about-card">
          <img src={profileImage} alt="Guru Prasad" className="about-image" />
        </div>
        <div className="about-card about-text">
          <p>
            I’m a dedicated B.Tech student in <strong>Computer Science and Engineering</strong>, with a strong interest
            in <strong>software development, web technologies, and real-world problem-solving.</strong>
          </p>
          <p>
            I enjoy building clean, responsive, and user-friendly web applications using <strong>HTML, CSS, JavaScript, Java, and MySQL.</strong> Through academic projects and internships, I’ve gained hands-on
            experience in full-stack development, database management, and system design.
          </p>
          <p>
            I’m passionate about <strong>learning new technologies</strong>, <strong>collaborating on meaningful projects</strong>, and continuously improving my skills. With a <strong>logical mindset</strong> and <strong>attention to detail</strong>, I aim to create <strong>impactful digital solutions</strong> that combine functionality with great user experience.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
