import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing other components
import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  const [hoveredLink, setHoveredLink] = useState(null); // State to track hovered link
  
  const handleMouseEnter = (link) => setHoveredLink(link); // Set hovered link
  const handleMouseLeave = () => setHoveredLink(null); // Reset hovered link

  return (
    <div>
      <Router>
        <center>
          {/* Navbar */}
          <Navbar expand="lg" style={navbarStyles.navbar}>
            <Container>
              <Navbar.Brand as={Link} to="/" style={navbarStyles.brand}>
                MY PERSONAL INFO
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    as={Link}
                    to="/"
                    style={hoveredLink === 'Home' ? { ...navbarStyles.navLink, ...navbarStyles.navLinkHover } : navbarStyles.navLink}
                    onMouseEnter={() => handleMouseEnter('Home')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/About"
                    style={hoveredLink === 'About' ? { ...navbarStyles.navLink, ...navbarStyles.navLinkHover } : navbarStyles.navLink}
                    onMouseEnter={() => handleMouseEnter('About')}
                    onMouseLeave={handleMouseLeave}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/Education"
                    style={hoveredLink === 'Education' ? { ...navbarStyles.navLink, ...navbarStyles.navLinkHover } : navbarStyles.navLink}
                    onMouseEnter={() => handleMouseEnter('Education')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Education
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/Hobbies"
                    style={hoveredLink === 'Hobbies' ? { ...navbarStyles.navLink, ...navbarStyles.navLinkHover } : navbarStyles.navLink}
                    onMouseEnter={() => handleMouseEnter('Hobbies')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Hobbies
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/Contact"
                    style={hoveredLink === 'Contact' ? { ...navbarStyles.navLink, ...navbarStyles.navLinkHover } : navbarStyles.navLink}
                    onMouseEnter={() => handleMouseEnter('Contact')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Hobbies" element={<Hobbies />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </center>
      </Router>
    </div>
  );
}

const navbarStyles = {
  navbar: {
    background: 'linear-gradient(90deg, rgba(255, 87, 34, 1) 0%, rgba(255, 193, 7, 1) 100%)', // Gradient background
    padding: '15px 0',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif', // Elegant font family
  },
  brand: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '26px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  navLink: {
    color: '#ffffff',
    fontWeight: 'bold',
    margin: '0 20px',
    fontSize: '18px',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  navLinkHover: {
    color: '#FFEB3B', // Yellow color for hover
    transform: 'scale(1.1)', // Slightly enlarge the text
    textDecoration: 'underline', // Add underline on hover
    textDecorationColor: '#FFEB3B', // Match underline with the hover color
  },
};

export default App;
