
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AI-Powered Delivery Post Office Identification System',
    description: `This Android app modernizes how users interact with postal services using AI and geo-mapping. Built with Kotlin, it helps users locate nearby post offices, file complaints, and receive real-time updates through an AI chatbot (Gemini). It includes an admin panel for managing user feedback and complaints efficiently.`,
    features: [
      'AI chatbot for instant support',
      'Real-time geo-mapping of post offices',
      'Complaint submission and tracking',
      'Secure login for users/admin',
      'In-app calling, navigation, and feedback tools',
    ],
    techStack: 'Kotlin, MySQL, Gemini AI, Android Studio',
    github: {
      text: '🔗 GitHub Repository',
      link: 'https://github.com/GuruPrasadAnanthaneni/Postal_AI_App',
    },
  },
  {
    title: 'Billy – Buddy Against Cyberbullying',
    description: `Billy is a full-stack web platform built to support victims of cyberbullying. It offers anonymous reporting, emotional support through an AI chatbot, educational content, and a safe community forum. Data collected helps authorities identify high-risk areas for intervention.`,
    features: [
      'AI chatbot for anonymous reporting and support',
      'Dashboard for cybercrime analytics',
      'Self-help tips and safety education',
      'Anonymous support forum',
    ],
    techStack: 'React.js, Node.js, Express.js, MongoDB, Groq API',
    github: {
        text: '🔗 GitHub Repository',
        link: 'https://github.com/GuruPrasadAnanthaneni/GurBilly_Buddy_against_Cyber_Bullying',
      },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            {project.github ? (
              <a
                href={project.github.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.github.text}
              </a>
            ) : (
              <span className="github-unavailable">🔒 GitHub link coming soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
