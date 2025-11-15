// Navbar.jsx
import React from 'react';
import './Navbar.css';
import Flame from '../../assets/flame.svg'; 
import Button from '../Button/Button'; 

export default function Navbar() {
  return (
    <div className="navbar-root">
      {/* Fixed Header Navigation */}
      <header className="navbar-header">
        <nav className="navbar-nav">
          <div className="navbar-brand group">
            <div className="navbar-logo-wrapper">
              <div className="navbar-logo-blur"></div>
              <img
                src={Flame}
                alt="Vibe Kraft Solutions"
                className="navbar-logo-img"
              />
            </div>
            <span className="navbar-brand-name">Vibe Kraft Solutions</span>
          </div>

          <div className="navbar-links">
            {["Services", "Process", "Portfolio", "Contact"].map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                className="navbar-link"
              >
                {link}
                <span className="navbar-link-underline"></span>
              </a>
            ))}
            <Button className="navbar-get-started-btn">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
