import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'דף הבית' },
    { path: '/form', label: 'טופס' },
    { path: '/about', label: 'אודות' },
    { path: '/contact', label: 'צור קשר' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-brand">
          <Link to="/" className="navigation-logo">
            Nitzotz
          </Link>
        </div>
        
        <button 
          className="navigation-toggle"
          onClick={toggleMenu}
          aria-label="תפריט"
        >
          <span className="navigation-toggle-line"></span>
          <span className="navigation-toggle-line"></span>
          <span className="navigation-toggle-line"></span>
        </button>
        
        <div className={`navigation-menu ${isMenuOpen ? 'navigation-menu-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navigation-link ${
                location.pathname === item.path ? 'navigation-link-active' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
