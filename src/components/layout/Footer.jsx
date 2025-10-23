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
              <a href="https://www.instagram.com/nitzotz_bmedia?igsh=a3p3bTM1ZnpuYm8z&utm_source=qr" 
              className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <span className="footer-separator">•</span>
              <a href=" https://www.tiktok.com/@nitzotz_bmedia?_t=ZS-90lFnH8qZvw&_r=1" className="footer-social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                TikTok
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
