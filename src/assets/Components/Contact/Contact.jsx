import React from 'react';
import Title from '../Title/Title';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page text-dark">
      <div className="container mt-3">
        <Title color="text-dark" bgColor='bg-dark'>CONTACT SECTION</Title>
        
        <div className="row justify-content-center contact-form-container">
          <div className="col-md-6">
            
            <div className="contact-input-group">
              <input
                type="text"
                className="contact-input py-3"
                placeholder="userName"
              />
            </div>
            
            <div className="contact-input-group">
              <input
                type="number"
                className="contact-input"
                placeholder="userAge"
              />
            </div>
            
            <div className="contact-input-group">
              <input
                type="email"
                className="contact-input"
                placeholder="userEmail"
              />
            </div>
            
            <div className="contact-input-group">
              <input
                type="password"
                className="contact-input"
                placeholder="userPassword"
              />
            </div>
            
            <button className="contact-submit-btn">
              send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}