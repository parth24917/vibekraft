// Process.jsx
import React from 'react';
import './Process.css';
import { Flame, ChevronRight } from 'lucide-react';
import { steps } from './steps';



export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div className="process-header">
          <div className="process-header-top">
            <Flame className="flame-icon" color="#dc2626" />
            <span className="section-subtitle">How We Work</span>
          </div>
          <h2 className="process-section-title">Our Proven Process</h2>
          <p className="section-description">
            A streamlined approach to deliver exceptional results
          </p>
        </div>

        <div className="process-steps">
          {steps.map((process, index) => {
            const Icon = process.icon;
            return (
              <div key={index} className="step-wrapper">
                <div className="step-card">
                  <div className="step-number">{process.step}</div>
                  <div className="step-icon-bg">
                    <Icon color="white" className="step-icon" />
                  </div>
                  <h3 className="step-title">{process.title}</h3>
                  <p className="step-desc">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="step-arrow">
                    <ChevronRight className="arrow-icon" color="#fca5a5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
