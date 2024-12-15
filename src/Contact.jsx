import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}. I will get back to you soon!`);
    setName('');
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>LET'S GET IN TOUCH</h1>
      <h2 style={styles.subHeading}>Feel free to reach out to me!</h2>
      
      <div style={styles.contactContainer}>
        <div style={styles.contactItem}>
          <FaPhone style={styles.icon} />
          <div>
            <h3 style={styles.contactTitle}>Give Me A Call</h3>
            <p style={styles.contactText}>0907 032 3119</p>
          </div>
        </div>

        <div style={styles.contactItem}>
          <FaEnvelope style={styles.icon} />
          <div>
            <h3 style={styles.contactTitle}>Send Me An Email</h3>
            <p style={styles.contactText}>mmagistrado@gmail.com</p>
          </div>
        </div>

        <div style={styles.contactItem}>
          <FaMapMarkerAlt style={styles.icon} />
          <div>
            <h3 style={styles.contactTitle}>Or Visit My Office</h3>
            <p style={styles.contactText}>M.T. Villanueva Avenue, Liboton, Naga City</p>
          </div>
        </div>
      </div>

      <h2 style={styles.formHeading}>Leave Your Info and I’ll Get Back to You</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%', // Full width
    height: '100vh', // Full height of the viewport
    margin: 0,
    padding: '50px 20px', // Add padding to the container for spacing
    background: 'linear-gradient(135deg, #1a1a1a, #3a3a3a)', // Darker, more professional gradient background
    color: '#E0E0E0',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    boxSizing: 'border-box', // Include padding in width/height calculation
  },
  heading: {
    fontSize: '36px',
    color: '#FFD700', // Gold color for professionalism
    marginBottom: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subHeading: {
    fontSize: '22px',
    color: '#B0B0B0', // Light gray
    marginBottom: '40px',
    letterSpacing: '1px',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: '50px',
    padding: '0 20px',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  },
  contactItem: {
    flex: 1,
    minWidth: '250px', // Set a minimum width for responsiveness
    textAlign: 'center',
    padding: '25px',
    backgroundColor: '#2c2c2c',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  },
  icon: {
    fontSize: '40px',
    color: '#FFD700',
    marginBottom: '15px',
  },
  contactTitle: {
    fontSize: '20px',
    color: '#FFD700',
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: '16px',
    color: '#B0B0B0',
  },
  formHeading: {
    fontSize: '24px',
    color: '#FFD700',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px', // Limit form width
    width: '100%',
    padding: '20px',
    backgroundColor: '#2c2c2c',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
  },
  input: {
    margin: '12px 0',
    padding: '12px',
    fontSize: '16px',
    width: '100%',
    maxWidth: '400px', // Max width for input fields
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#3a3a3a', // Darker input background
    color: '#E0E0E0', // Light text color
  },
  submitButton: {
    padding: '12px 30px',
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#2C2C2C', // Darker text color for button
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  },
};

export default Contact;
