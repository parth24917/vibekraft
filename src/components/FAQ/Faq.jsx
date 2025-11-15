// Faq.jsx
import React from 'react';
import './Faq.css';
import { MessageSquare } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@radix-ui/react-accordion'; 

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Most web development projects take 6-12 weeks, while branding projects typically take 4-8 weeks. We provide detailed timelines during the discovery phase.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models including project-based, retainer, and hourly rates. Pricing depends on project scope, timeline, and specific requirements. Contact us for a custom quote.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We provide comprehensive maintenance and support packages for all our clients. This includes updates, security monitoring, performance optimization, and technical support.'
  },
 ,
  {
    question: 'How do you measure success?',
    answer: 'We establish clear KPIs at the project start, including metrics like conversion rates, engagement, traffic growth, and ROI. Regular reporting keeps you informed of progress and results.'
  }
];

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-header-top">
            <MessageSquare className="faq-icon" color="#dc2626" />
            <span className="faq-subtitle">FAQ</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="faq-accordion">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="faq-accordion-item"
            >
              <AccordionTrigger className="faq-accordion-trigger">
                <span className="faq-question">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
