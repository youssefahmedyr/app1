import React from 'react';
import Title from '../Title/Title';
import img from '../../imgs/avatar.svg';
import './home.css';

export default function Home() {
  return (
    <div className="home-page text-white">
      <div className="container text-center">
        <img src={img} alt="avatar" className="home-avatar mb-4" />
        <Title color="text-white my-3">START FRAMEWORK</Title>
        <p className="home-subtitle fs-6">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}