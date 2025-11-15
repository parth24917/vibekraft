// Hero.jsx
import React from 'react';
import './Hero.css';
import { Flame, Badge, Rocket, ArrowRight, Award, Divide } from 'lucide-react';
import Typewriter from '../Typewriter/Typewriter'
import Button from '../Button/Button'; 

export default function Hero() {
  const count1 = 5;
  const count2 =100;
  const count3 = 5;
  return (
    <section className="hero-section">
      
      <div className="hero-bg-main"></div>
      <div className="hero-bg-pulse-top"></div>
      <div className="hero-bg-pulse-bottom"></div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text-content">
            {/* <div className="hero-header-top">
              <Flame className="icon-flame" color="#dc2626" />
              <div className="badge-digital-excellence">
                Digital Excellence 
              </div>
            </div> */}

            <h1 className="hero-title">
              Transform Your
              <span className="hero-gradient-text">
                Digital Future
              </span>
            </h1>

            <Typewriter/>

            <div className="hero-buttons">
              <Button size="lg" className="btn-primary">
                <Rocket className="icon-left" />
                Start Your Project
                <ArrowRight className="icon-right" />
              </Button>
              <button className="hero-button">
                View our work
              </button>
            </div>

            {/* Animated Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number stat-red">{count1}+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number stat-orange">{count2}%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number stat-yellow">{count3}+</div>
                <div className="stat-label">Team Experts</div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Team collaboration"
                className="hero-image"
              />
              <div className="hero-award-badge">
                <div className="award-content">
                  <Award className="award-icon" />
                  <div>
                    <div className="award-subtitle">Award Winning</div>
                    <div className="award-title">Agency 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
