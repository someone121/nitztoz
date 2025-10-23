import React from 'react';
import Button from '../common/Button';
import './Header.css';

const Header = ({ title, subtitle, videoSrc, ctaText, onCtaClick, ctaVariant = 'primary', ctaSize = 'medium', prefaceText, extraTitleLines, descriptionText }) => {
  return (
    <header className="header">
      <div className="header-content">
        {prefaceText && (
          <p className="header-preface header-secret-text">
            {prefaceText}
          </p>
        )}

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

        {Array.isArray(extraTitleLines) && extraTitleLines.length > 0 && (
          <div className="header-title">
            {extraTitleLines.map((line, index) => (
              <h1 key={index} className="header-title-line">
                {line}
              </h1>
            ))}
          </div>
        )}

        {descriptionText && (
          <p className="header-description">
            {descriptionText}
          </p>
        )}

        
        {videoSrc && (
          <div className="header-video-container">
            <video
              autoPlay
              muted
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
            variant={ctaVariant} 
            size={ctaSize} 
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
