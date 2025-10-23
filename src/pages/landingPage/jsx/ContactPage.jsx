import React from 'react';
import Section from '../../../components/common/Section';
import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import '../css/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navigation />
      <Section className="contact-page-hero">
        <div className="contact-page-content">
          <h1 className="contact-page-title">צור קשר</h1>
          <p className="contact-page-subtitle">
            יש לך שאלות? אנחנו כאן לעזור
          </p>
        </div>
      </Section>
      
      <Section>
        <div className="contact-content">
          <div className="contact-info">
            <h2>פרטי יצירת קשר</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>אימייל</h3>
                <p>yarinandomer10@gmail.com</p>
              </div>
              
              <div className="contact-method">
                <h3>טלפון</h3>
                <p>052-7093809</p>
              </div>
              
            </div>
          </div>
          
          <div className="contact-social">
            <h2>עקבו אחרינו</h2>
            <div className="social-links">
              <a href="https://www.instagram.com/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/" className="social-link" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://www.youtube.com/" className="social-link" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;



