import React from 'react';
import './cars.css';

const Footer = () => {
  return (
    <section className="base">
      <footer className="footer">
        <div className="footer-content">
          <div className="social-icons">
            <a href="#" className="icon">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
            </a>
            <a href="#" className="icon">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
            </a>
            <a href="#" className="icon">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="#" className="icon">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
            </a>
          </div>

          <div className="footer-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#contact">Collections</a></li>
              <li><a href="#contact">View Gallery</a></li>
              <li><a href="#contact">Login/Sign Up</a></li>
            </ul>
            <br />
            <ul>
              <li>Bikes</li>
              <li>Cars</li>
              <li>Drive</li>
              <li>Buy</li>
            </ul>
          </div>

          <p>© veloxio. All Rights Reserved.</p>
        </div>
      </footer>

      <button id="backToTopBtn" title="Go to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ⬆️
      </button>
    </section>
  );
};

export default Footer;
