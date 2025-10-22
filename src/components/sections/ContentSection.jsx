import React from 'react';
import Button from '../common/Button';
import './ContentSection.css';

const ContentSection = ({ 
  title, 
  content, 
  listItems, 
  ctaText, 
  ctaHref, 
  onCtaClick,
  ctaVariant = 'secondary',
  className = '' 
}) => {
  return (
    <div className={`content-section ${className}`}>
      {title && (
        <h3 className="content-section-title">
          {title}
        </h3>
      )}
      
      {content && (
        <div className="content-section-text">
          {Array.isArray(content) ? 
            content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )) :
            <p>{content}</p>
          }
        </div>
      )}
      
      {listItems && (
        <ul className="content-section-list">
          {listItems.map((item, index) => (
            <li key={index} className="content-section-list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      
      {ctaText && (
        <div className="content-section-cta">
          {ctaHref ? (
            <Button 
              variant={ctaVariant} 
              href={ctaHref}
              className="content-section-button"
            >
              {ctaText}
            </Button>
          ) : (
            <Button 
              variant={ctaVariant} 
              onClick={onCtaClick}
              className="content-section-button"
            >
              {ctaText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentSection;
