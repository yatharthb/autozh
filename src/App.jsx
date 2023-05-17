import "./App.css";
import { FaCar } from "react-icons/fa";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function App() {
  // Framer Motion animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleNewsCardClick = () => {
    window.location.href = "https://example.com/article";
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <FaCar size="2rem" />
          <h1 className="logo-text">AutoZhong</h1>
        </div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
        </ul>
      </nav>
      <main className="main">
        <div className="manufacturer-spotlight">
          <img src="/nio2.png" alt="Manufacturer Spotlight" />
          <h2 className="manufacturer-spotlight-text">Manufacturer Spotlight</h2>
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
        <div className="news-section">
          {Array(3).fill().map((_, i) => (
            <motion.div
              initial="hidden"
              animate="visible"
              className="news-card-wrapper"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: 0.3 * i }}
              onClick={handleNewsCardClick}
            >
              <Card className="news-card" key={i}>
                <div className="news-card-image" style={{ backgroundImage: `url(/news-image-${i + 1}.jpg)` }}>
                  <h3 className="news-card-overlay-text">News Title</h3>
                </div>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Placeholder content for a news item.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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