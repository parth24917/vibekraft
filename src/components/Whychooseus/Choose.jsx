// choose.jsx
import React from 'react';
import './Choose.css';
import { Flame, Lightbulb, Shield, Heart, Zap } from 'lucide-react'; // from lucide-react

// Import your ImageWithFallback component or replace with img


const reasons = [
  { icon: Lightbulb, title: 'Creative Excellence', description: 'Innovative solutions that set you apart from competition' },
  { icon: Heart, title: 'Client-First Approach', description: 'Your success is our success, always putting you first' },
  { icon: Zap, title: 'Fast Turnaround', description: 'Efficient processes without compromising on quality' }
];

export default function Choose() {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="grid-layout">
          <div className="image-wrapper">
            <div className="blur-background"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Team working"
              className="team-image"
            />
          </div>

          <div className="content">
            <div className="topheader">
              <Flame className="icon-flame" color="#dc2626" />
              <span className="subtitle">Why Choose Us</span>
            </div>
            <h2 className="choose-title">
              We're Different,
              <span className="highlight-text">
                And That's Good
              </span>
            </h2>

            <div className="reasons-list">
              {reasons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="reason-card">
                    <div className="icon-bg">
                      <Icon color="white" className="reason-icon" />
                    </div>
                    <div className="reason-text">
                      <h4 className="reason-title">{item.title}</h4>
                      <p className="reason-description">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
