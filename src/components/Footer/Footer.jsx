// Footer.jsx
import React from 'react';
import './Footer.css';
import { MessageCircleCode, MessageSquare, Mail } from 'lucide-react';
import Flame from '../../assets/flame.svg'; 

const quickLinks = ['Services', 'Portfolio', 'Contact'];
const servicesLinks = ['Web Development', 'Digital Marketing', 'E-commerce', 'Brand Strategy'];
const socialIcons = [
  { Icon: MessageCircleCode, link: "https://wa.me/+919560550946" },
  { Icon: MessageSquare, link: "https://some-other-link.com" },
  { Icon: Mail, link: "mailto:example@example.com" }
];


export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-gradient-top"></div>
      <div className="footer-gradient-bottom"></div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-bg"></div>
              <div className="footer-logo">
                <img
                  src={Flame}
                  alt="Vibe Kraft Solutions"
                  className="footer-logo-img"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
            <span className="footer-brand-name">Vibe Kraft Solutions</span>
            <p className="footer-brand-desc">
              Empowering businesses through creative digital solutions and strategic growth partnerships.
            </p>
            <div className="footer-social-list">
              {socialIcons.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-button"
                >
                  <Icon className="footer-social-icon" color="white" />
                </a>
              ))}

            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Services</h4>
            <ul className="footer-list">
              {servicesLinks.map((service, i) => (
                <li key={i}>
                  <a href="#" className="footer-link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Vibe Kraft Solutions. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
