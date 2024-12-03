import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/467898436_1650737662465184_6430505723355916623_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GKRBQ3gD954Q7kNvgGkP5WT&_nc_zt=23&_nc_ht=scontent.fmnl25-2.fna&_nc_gid=Atv182cdcGHk-dhmrY2_K2k&oh=00_AYArAuCPIclnNR69TlreCtUFgAl4CP-lCOvX2GdA6HmQAQ&oe=67542B9E"
          style={styles.image}
          alt="MJ Magistrado"
        />
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Hello! I'm MJ Magistrado</h1>
          <p style={styles.text}>
            Welcome to my personal portfolio! I’m a passionate and driven Computer Science student from Naga City.
            Explore my site to learn about my education, hobbies, and how to get in touch with me.
          </p>
          <button style={styles.button}>
            <a href="/About" style={styles.buttonLink}>Learn More About Me</a>
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
    background: 'linear-gradient(135deg, #00bcd4, #607d8b)', // Gradient background
    color: '#fff',
    textAlign: 'center',
    fontFamily: '"Roboto", sans-serif', // Clean font style
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    padding: '30px 50px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    maxWidth: '900px', 
    flexDirection: 'row', // Side-by-side layout
    overflow: 'hidden',
  },
  image: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    marginRight: '30px',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  textContainer: {
    maxWidth: '600px',
    color: '#fff',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '20px',
    letterSpacing: '1.5px', 
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.7',
    marginBottom: '25px',
    fontWeight: '300', // Lighter text for easy reading
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
