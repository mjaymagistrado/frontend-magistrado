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
    backgroundColor: '#2C2C2C',
    padding: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
  },
  brand: {
    color: '#E0E0E0',
    fontWeight: 'bold',
    fontSize: '24px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    letterSpacing: '2px',
  },
  navLink: {
    color: '#B0B0B0',
    fontWeight: 'bold',
    margin: '0 20px',
    fontSize: '18px',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  navLinkHover: {
    color: '#FFD700',
    transform: 'scale(1.1)',
    textShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
  },
};

export default App;
