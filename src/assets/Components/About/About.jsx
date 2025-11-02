import React from 'react';
import Title from '../Title/Title';
import './About.css';

export default function About() {
  return (
    <div className="about-page text-white d-flex align-items-center justify-content-center">
      <div className="container">
        <Title color="text-white">ABOUT COMPONENT</Title>
        <div className="row about-content mt-3 w-100 d-flex justify-content-center align-items-center">
          <div className="col-md-5">
            <p className="about-text">
              Freelancer is a free bootstrap theme created by Route. The download includes 
              the complete source files including HTML, CSS, and JavaScript as well as 
              optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p className="about-text">
              Freelancer is a free bootstrap theme created by Route. The download includes 
              the complete source files including HTML, CSS, and JavaScript as well as 
              optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}