import React from 'react';
import './App.css';
import Typist from 'react-typist-component';
import { FaCar } from 'react-icons/fa';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { motion, useScroll  } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const newsItems = [
  {
    title: 'Breaking News 1',
    description: 'Discover the future of automotive innovation 1.',
    imageUrl: '/btp.png',
    url: 'https://example.com/article1',
  },
  {
    title: 'Breaking News 2',
    description: 'Discover the future of automotive innovation 2.',
    imageUrl: '/sld.png',
    url: 'https://example.com/article2',
  },
  {
    title: 'Breaking News 3',
    description: 'Discover the future of automotive innovation 3.',
    imageUrl: '/van.png',
    url: 'https://example.com/article3',
  },
];

// Custom components
const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(15, 76, 117, 0.1);
  color: #bbe1fa;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.li`
list-style-position: initial;

`;

const NewsCards = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

const NewsCard = styled(motion.div)`
  flex: 1;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative; // Add this line to position the text inside the NewsCard
`;
const NewsCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

// Main component
export default function App() {
  // Framer Motion animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleNewsCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Logo>
          <FaCar size="2rem" />
          <LogoText>AutoZhong</LogoText>
        </Logo>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
        </Navbar>
      <main className="main">
        <div className="manufacturer-spotlight">
          <img src="/nio2.png" alt="Manufacturer Spotlight" />
          <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}>
            <Typist>
              This is the manufacturer spotlight. <Typist.Delay ms={500} /> Check out our latest features...
            </Typist>
          </div>
        </div>
        <p>Discover the future of automotive innovation.</p>
        <motion.div
          className="second-card"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <img src="/gerc.png" alt="Second Card" />
        </motion.div>
        <NewsCards>
  {newsItems.map((news, index) => (
    <NewsCard
      key={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      onClick={() => handleNewsCardClick(news.url)}
      style={{ backgroundImage: `url('${news.imageUrl}')` }}
    >
      <NewsCardOverlay>
        <Typography variant="h6">{news.title}</Typography>
        <Typography variant="subtitle1">{news.description}</Typography>
      </NewsCardOverlay>
    </NewsCard>
  ))}
</NewsCards>
      </main>
      <footer className="footer">
        <div className="footer-column">
          <h3>About Us</h3>
          <a href="#about" className="footer-link">Who We Are</a>
          <a href="#team" className="footer-link">Our Team</a>
          <a href="#mission" className="footer-link">Mission</a>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <a href="#email" className="footer-link">Email</a>
          <a href="#phone" className="footer-link">Phone</a>
          <a href="#address" className="footer-link">Address</a>
        </div>
        <div className="footer-column">
          <h3>Terms & Conditions</h3>
          <a href="#terms" className="footer-link">Terms of Use</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#disclaimer" className="footer-link">Disclaimer</a>
        </div>
        <div className="footer-column">
          <p>
            © {new Date().getFullYear()} AutoFuturist Media Company. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}