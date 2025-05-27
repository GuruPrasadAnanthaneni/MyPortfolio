
import React from 'react';
import './Skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 

const skills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'Bootstrap', icon: faBootstrap},
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'MongoDB', icon: faDatabase },  
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
