import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes backgroundChange {
            0% {
              background: linear-gradient(135deg, #B0BEC5, #E0E0E0); /* Gray to White */
            }
            50% {
              background: linear-gradient(135deg, #E0E0E0, #FAFAFA); /* White to Dirty White */
            }
            100% {
              background: linear-gradient(135deg, #FAFAFA, #B0BEC5); /* Dirty White to Gray */
            }
          }
        `}
      </style>

      <h1 style={styles.heading}>Contact Information</h1>
      <div style={styles.infoContainer}>
        <div style={styles.info}>
          <FaEnvelope style={styles.icon} />
          <p>Email: <a href="mailto:mmagistrado@gmail.com" style={styles.link}>mmagistrado@gmail.com</a></p>
        </div>
        <div style={styles.info}>
          <FaPhone style={styles.icon} />
          <p>Phone: <a href="tel:09009139457" style={styles.link}>09009139457</a></p>
        </div>
        <div style={styles.info}>
          <FaMapMarkerAlt style={styles.icon} />
          <p>Location: 349 Capilihan St, Naga City, Camarines Sur</p>
        </div>
      </div>
      <h2 style={styles.subHeading}>Find Me Online</h2>
      <div style={styles.socialContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          <FaFacebook style={styles.socialIcon} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          <FaGithub style={styles.socialIcon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          <FaInstagram style={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
    animation: 'backgroundChange 10s infinite alternate',  // Apply animation here
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  infoContainer: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  icon: {
    marginRight: '10px',
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: '24px',
    color: '#555',
    margin: '20px 0',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  socialLink: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '24px',
    transition: 'transform 0.2s, color 0.2s',
  },
  socialIcon: {
    fontSize: '28px',
  },
  socialLinkHover: {
    color: '#007bff',
    transform: 'scale(1.1)',
  },
};

export default Contact;
