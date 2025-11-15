// Service.jsx
import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import { services } from './servicecontent';
import  Sparkles  from '../../assets/sparkles.svg'; // Replace or use your icon

export default function Service() {
  return (
    <section id="services" className="services-section">
      <div className="gradient-bg"></div>

      <div className="container">
        <div className="section-header">
          <div className="header-top">
            <img src={Sparkles} className="sparkles-icon" />
            <span className="header-subtitle">Our Expertise</span>
          </div>
          <h2 className="section-title">Services That Drive Results</h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service, idx) => (
            <Card key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
