import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <p className="footer-social-title">עקבו אחרינו</p>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <span className="footer-separator">•</span>
              <a href="https://www.tiktok.com/" className="footer-social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
              <span className="footer-separator">•</span>
              <a href="https://www.youtube.com/" className="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>
              {currentYear} © nitzotz bamedia • Powered by peron prod
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
