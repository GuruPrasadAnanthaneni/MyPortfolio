// src/components/Resume.jsx
import React from 'react';
import './Resume.css';
import resumeImage from '../assets/resume.jpg'; 
  

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <img
          src={resumeImage}
          alt="Resume Preview"
          className="resume-image"
        />
        <p className="resume-text">
          Click below to view or download my resume.
        </p>
        <a
          href="/Resume.pdf"
          target="_blank"
          className="resume-button"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
