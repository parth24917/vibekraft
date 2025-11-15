// Contact.jsx
import React from 'react';
import './Contact.css';
import { Flame, Mail, Phone, MapPin } from 'lucide-react';
import Form from '../Form/Form';


const contactDetails = [
  { icon: Mail, text: 'info@vibekraftsolutions.com' },
  { icon: Phone, text: '+919560550946' },
  { icon: MapPin, text: 'Delhi, INDIA' }
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-header-top">
              <Flame className="contact-icon-flame" color="#dc2626" />
              <span className="contact-subtitle">Get In Touch</span>
            </div>
            <h2 className="contact-title">
              Let's Ignite Your
              <span className="contact-gradient-text">Next Project</span>
            </h2>
            <p className="contact-description">
              Ready to transform your digital presence? Get in touch with our team and let's create something amazing together.
            </p>

            <div className="contact-details-list">
              {contactDetails.map(({ icon: Icon, text }, index) => (
                <div key={index} className="contact-detail-item">
                  <div className="contact-detail-icon-bg">
                    <Icon className="contact-detail-icon" color="white" />
                  </div>
                  <span className="contact-detail-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
