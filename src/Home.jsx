import React from 'react';

const Home = () => {
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

      <div style={styles.content}>
        <img
          src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/467898436_1650737662465184_6430505723355916623_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GKRBQ3gD954Q7kNvgGkP5WT&_nc_zt=23&_nc_ht=scontent.fmnl25-2.fna&_nc_gid=Atv182cdcGHk-dhmrY2_K2k&oh=00_AYArAuCPIclnNR69TlreCtUFgAl4CP-lCOvX2GdA6HmQAQ&oe=67542B9E"
          style={styles.image}
        />
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Hello! I'm MJ Magistrado</h1>
          <p style={styles.text}>
            Welcome to my personal portfolio! I’m a passionate and driven Computer Science student from Naga City.
            Explore my site to learn about my education, hobbies, and how to get in touch with me.
          </p>
          <button style={styles.button}>
            <a href="/About" style={styles.buttonLink}>
              Learn More About Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    animation: 'backgroundChange 10s infinite alternate',  // Apply animation here
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: '20px 40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    flexWrap: 'wrap', 
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginRight: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',
  },
  textContainer: {
    maxWidth: '600px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#FFA500', 
    transform: 'scale(1.05)',
  },
  buttonLink: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  },
};

export default Home;
