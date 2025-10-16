import React from 'react';
import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import Section from '../../../components/common/Section';
import '../css/VideoPage.css';

const VideoPage = () => {
  return (
    <div className="video-page">
      <Navigation />
      
      <Section className="video-page-hero">
        <div className="video-page-content">
          <h1 className="video-page-title">תודה על ההרשמה!</h1>
          <p className="video-page-subtitle">
            הנה ההדרכה החינמית שלך - שתי סרטונים שישנו את כל מה שחשבת על שיווק
          </p>
        </div>
      </Section>

      <Section className="videos-section">
        <div className="videos-container">
          <div className="video-item">
            <h3 className="video-title">סרטון 1: 5 הטעויות הקריטיות</h3>
            <div className="video-placeholder">
              <div className="video-placeholder-content">
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <p className="placeholder-text">הסרטון יופיע כאן</p>
              </div>
            </div>
            <p className="video-description">
              גלי את 5 הטעויות הקריטיות שגורמות למעצבות פנים מוכשרות להיעלם בים של מתחרות
            </p>
          </div>

          <div className="video-item">
            <h3 className="video-title">סרטון 2: הנוסחה הסודית</h3>
            <div className="video-placeholder">
              <div className="video-placeholder-content">
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <p className="placeholder-text">הסרטון יופיע כאן</p>
              </div>
            </div>
            <p className="video-description">
              למדי את הנוסחה המדויקת שעובדת על אוטומט ומביאה לקוחות איכותיים
            </p>
          </div>
        </div>
      </Section>

      <Section className="cta-section" background="light">
        <div className="cta-content">
          <h3 className="cta-title">מוכנה לצעד הבא?</h3>
          <p className="cta-description">
            אם הסרטונים האלה עזרו לך להבין את הפוטנציאל שלך, בואי נדבר על איך לקחת את העסק שלך לשלב הבא
          </p>
          <a href="/contact" className="cta-button">
            בואי נדבר על הפרויקט הבא שלך
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default VideoPage;

