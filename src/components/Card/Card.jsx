// Card.jsx
import React from 'react';
import './card.css';

export default function Card({ service }) {
  const Icon = service.icon;
  const gradientStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${service.colorStart}, ${service.colorEnd})`
  };

  return (
    <div className="card group">
      <div className="card-header">
        <div className="icon-wrapper" style={gradientStyle}>
          <Icon color="white" strokeWidth={1} className="icon" />
        </div>
        <h3 className="card-title">{service.title}</h3>
      </div>
      <div className="card-content">
        <p className="card-description">{service.description}</p>
        <button className="learn-more-button">
          Learn More
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}
