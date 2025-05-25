// import React, { useState } from 'react';
// import axios from 'axios';
// import './Contact.css';

// // Import icons (you can use FontAwesome or your own images)
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/contact', formData)
//       .then(() => alert('Message sent!'))
//       .catch(() => alert('Error sending message.'));
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Your Name" onChange={handleChange} required />
//         <input name="email" placeholder="Your Email" onChange={handleChange} required />
//         <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
//         <button type="submit">Send</button>
//       </form>

//       {/* Connect Through Section */}
//       <div className="connect-through">
//         <h3>Connect Through</h3>
//         <div className="social-icons">
//           <a href="https://www.linkedin.com/in/ananthaneni-guruprasad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a href="https://github.com/GuruPrasadAnanthaneni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="mailto:guruprasad.ananthaneni.com" aria-label="Email">
//             <FontAwesomeIcon icon={faEnvelope} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hcqkztn',        // Replace with your actual service ID
      'template_jhw80jv',       // Replace with your actual template ID
      form.current,
      'MwKXOz8IXFIoMF8KJ'       // Replace with your actual public key
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Connect Through Section */}
      <div className="connect-through">
        <h3>Connect Through</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ananthaneni-guruprasad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/GuruPrasadAnanthaneni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:guruprasad.ananthaneni@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
