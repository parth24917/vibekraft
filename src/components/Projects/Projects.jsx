// Projects.jsx
import React from 'react';
import './Projects.css';
import { Flame, ChevronRight } from 'lucide-react';
import Aromomo from '../../assets/aromomo.png'
import Mkthub from '../../assets/mkthub.png'
import Trvl from '../../assets/trvl.png'
import Cars from '../../assets/cars.png'
const projectList = [
  {
    step: '01',
    title: 'AROMOMO CAFE',
    description:
      'We have produced engaging videos and managed end-to-end editing to enhance brand storytelling. In addition, we executed influencer marketing campaigns, developed customized content menus, and successfully increased audience engagement across social media platforms.',
    img: Aromomo
  },
  {
    step: '02',
    title: 'MKT HUB',
    description: 'A modern cafe site with bookings, gallery, and online menu.',
    img: Mkthub
  },
  {
    step: '03',
    title: 'Portfolio Platform',
    description: 'Responsive portfolio builder for creative freelancers.',
    img: Trvl
  },
  {
    step: '04',
    title: 'Startup Launch',
    description: 'Branding and launch campaign for an AI-powered SaaS startup.',
    img: Cars
  }
];

export default function Projects() {
  return (
    <section id="process" className="project-section">
      <div className="project-container">
        <div className="project-section-header">
          <div className="project-header-top">
            <Flame className="project-icon-flame" color="#dc2626" />
            <span className="project-section-subtitle">Our Portfolio</span>
          </div>
          <h2 className="project-section-title">Featured Projects</h2>
          <p className="project-section-description">
            A showcase of our recent digital work and project success stories.
          </p>
        </div>

        <div className="project-process-steps">
          {projectList.map((project, index) => (
            <div key={index} className="project-step-wrapper">
              <div className="project-step-card">
                <div className="project-card-img-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-card-img"
                  />
                </div>
                {/* remove icon entirely */}
                <h3 className="project-step-title">{project.title}</h3>
                <p className="project-step-desc">{project.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
