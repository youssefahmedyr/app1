import React from 'react';
import { Star } from 'lucide-react';
import './Title.css';

export default function Title({ children, color = 'text-white' , bgColor = 'bg-white' }) {
  return (
    <div className={`title-container ${color}`}>
      <h2 className="title-text">{children}</h2>
      <div className="title-decoration">
        <div className={`title-line ${bgColor}`}></div>
        <Star className="title-star" fill="currentColor"/>
        <div className={`title-line ${bgColor}`}></div>
      </div>
    </div>
  );
}