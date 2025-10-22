import React from 'react';
import Button from '../common/Button';
import './Header.css';

const Header = ({ title, subtitle, videoSrc, ctaText, onCtaClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        {subtitle && (
          <p className="header-subtitle">
            {subtitle}
          </p>
        )}
        
        {title && (
          <div className="header-title">
            {Array.isArray(title) ? 
              title.map((line, index) => (
                <h1 key={index} className="header-title-line">
                  {line}
                </h1>
              )) :
              <h1 className="header-title-line">{title}</h1>
            }
          </div>
        )}
        
        {videoSrc && (
          <div className="header-video-container">
            <video
              autoPlay
              className="header-video" 
              controls 
              playsInline 
              preload="metadata"
              poster="/video-poster.jpg"
            >
              <source src={videoSrc} type="video/mp4" />
              הדפדפן שלך לא תומך בנגן הווידאו.
            </video>
          </div>
        )}
        
        {ctaText && (
          <Button 
            variant="primary" 
            size="large" 
            className="header-cta"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
