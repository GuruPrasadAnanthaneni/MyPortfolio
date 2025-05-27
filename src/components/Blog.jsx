import React, { useState } from 'react';
import './Blog.css';

const blogData = [
  {
    title: '💡 Blog #1: AI-Powered Delivery Post Office Identification System',
    date: '2025',
    category: 'Android Development',
    tags: 'Kotlin, MySQL, Android Studio, AI, Geo-Mapping',
    intro: 'Postal services are crucial for communication and logistics, yet accessing them digitally remains outdated...',
    fullText: `This project addresses the challenge of identifying the correct post office for a delivery address using an AI-powered system. 
It leverages a mobile app developed in Android Studio (using Kotlin) that connects to a backend MySQL database. 
Geo-mapping and pincode extraction APIs help identify the nearest appropriate post office to handle a delivery request.
Users can track their parcels and get the best delivery post office based on location intelligence.`
  },
  {
    title: '💡 Blog #2: Billy – Buddy Against Cyberbullying',
    date: '2025',
    category: 'Web Development, Cybersecurity',
    tags: 'React.js, Node.js, MongoDB Compass, AI, Chatbot',
    intro: 'Cyberbullying is a widespread issue, and many victims lack the tools or courage to speak up due to their inner fear...',
    fullText: `Billy is an AI-powered chatbot built with React.js and Node.js that provides users a safe space to talk about online bullying. 
Users can report cyberbullying anonymously, and Billy can connect them to support resources or authorities.
It also features a dashboard showing statistics on cyber incidents, giving visibility to this growing threat.`
  },
  {
    title: '💡 Blog #3: Building My Developer Portfolio',
    date: '2025',
    category: 'Portfolio, Personal Branding',
    tags: 'React.js, Web Design, Personal Website, Tailwind CSS',
    intro: 'Your portfolio is your digital identity. I created my own developer portfolio to showcase my work...',
    fullText: `My portfolio was built using React.js with modern Tailwind CSS styling. It includes my projects, resume, contact form, and blog. 
The design is fully responsive and optimized for performance. It’s hosted on GitHub Pages and integrated with email contact forms.
This helped me land freelance projects and internship opportunities.`
  }
];

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); 
    } else {
      setExpandedIndex(index); 
    }
  };

  return (
    <section id="blog" className="blog-section">
      <h2>Blogs</h2>
      <div className="blogs-container">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className={`blog-card ${expandedIndex === index ? 'expanded' : ''}`}
            style={expandedIndex === index ? { alignSelf: 'flex-start' } : {}}
          >
            <h3>{blog.title}</h3>
            <p><strong>Date:</strong> {blog.date}</p>
            <p><strong>Category:</strong> {blog.category}</p>
            <p><strong>Tags:</strong> {blog.tags}</p>
            <h4>📝 Introduction</h4>
            <p>
              {expandedIndex === index ? blog.fullText : blog.intro}
            </p>
            <button
              className="read-more-btn"
              onClick={() => handleToggle(index)}
            >
              {expandedIndex === index ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
