import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"; // Import icons from react-icons

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Left Section - Text */}
      <div style={styles.textSection}>
        <h1 style={styles.heading}>
          Hi, I’m{" "}
          <span style={styles.highlight}>
            MJ Magistrado
          </span>
        </h1>
        <p style={styles.subHeading}>
          Computer Science Student & Web Developer
        </p>
        <p style={styles.text}>
          Welcome to my personal portfolio! I’m passionate about creating
          visually appealing and user-friendly websites.
        </p>
        <a href="/About" style={styles.button}>
          Learn More About Me
        </a>

        {/* Social Media Icons */}
        <div style={styles.socialIcons}>
          <a href="https://github.com/mjaymagistrado" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/synx.js/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/mj.magistrado.184" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaFacebook size={30} />
          </a>
        </div>
      </div>

      {/* Center Section - Image */}
      <div style={styles.imageSection}>
        <img
          src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467898436_1650737662465184_6430505723355916623_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSqrypalw8HvSJvjBClCj5DjJ7PDpS7h0OMns8OlLuHYIV2i_NFT0dMnejb1y0ZPvDauobnT4Vah08pEZeF5z9&_nc_ohc=bigG-Z7USgIQ7kNvgE6SGAT&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A3zSASaoKLvBneoyXBCdV1s&oh=00_AYDjH3lZDMZj-RWnwwfAaScbre8t_igdULLwVK5aYe85gQ&oe=6760799E"
          alt="Profile"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: "0 10%",
    background: "linear-gradient(135deg, #000000, #2c2c2c, #808080)",
    color: "#E0E0E0",
    textAlign: "center",
  },
  textSection: {
    flex: 1,
    textAlign: "left",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#FFD700", // Highlight color (gold)
    textShadow: "0 0 10px rgba(255, 215, 0, 0.8)", // Optional glowing effect
    transition: "all 0.3s ease",
  },
  subHeading: {
    fontSize: "24px",
    color: "#B0B0B0", // Light gray to match navbar links
    marginTop: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginTop: "20px",
    color: "#C0C0C0", // Slightly lighter text color
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: "#FFD700", // Gold background
    color: "#2C2C2C", // Dark text
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
  },
  imageSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "350px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "50%",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: "20px",
  },
  icon: {
    color: "#FFD700", // Icon color
    transition: "color 0.3s ease",
    textDecoration: "none",
  },
};

export default Home;
