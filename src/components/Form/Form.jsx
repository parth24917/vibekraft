import React, { useRef, useState } from 'react';
import './Form.css';
import { Sparkles, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Form() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  const form = formRef.current;
  const firstName = form['firstName'].value.trim();
  const lastName = form['lastName'].value.trim();
  const email = form['email'].value.trim();
  const details = form['details'].value.trim();

  if (!firstName || !lastName || !email || !details) {
    alert('Please fill in all required fields before sending.');
    return;
  }

  setSending(true);

    
    const serviceID = 'service_fqbaxdk';
    const templateID = 'template_9zn3vfu';
    const publicKey = 's7SO3q0rVzUA7am4s';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
        setSending(false);
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form-container">
      <div className="form-grid-two-cols">
        <div>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input id="firstName" name="firstName" placeholder="John" className="form-input" required />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input id="lastName" name="lastName" placeholder="Doe" className="form-input" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" name="email" type="email" placeholder="john@example.com" className="form-input" required />
      </div>
      <div>
        <label htmlFor="details" className="form-label">Project Details</label>
        <textarea id="details" name="details" placeholder="Tell us about your project..." className="form-textarea" required />
      </div>
      <button type="submit" className="form-button" disabled={sending}>
        <Sparkles className="button-icon-left" />
        {sending ? 'Sending...' : 'Send Message'}
        <ArrowRight className="button-icon-right" />
      </button>
    </form>
  );
}
