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
          src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/435689972_1504302563775362_9122925612745835284_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEvrFU4wEdJc_b9SWO64-aVdTdTr0RonO91N1OvRGic76Ya1DafVRco_iRFyILreP47U-MYk7YdOOjPr-dBOJka&_nc_ohc=LkjBosIjnioQ7kNvgFaKD9t&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AWJZFi-IWPRwgvJrKwrYkeK&oh=00_AYCswxlgX9zc49fBPH0Gc7w5A6ZIGI-AKwCVgkadDA_z2Q&oe=6745FE7D" 
          alt="Profile"
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
