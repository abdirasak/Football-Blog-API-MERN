import React from 'react'
import './Hero.css';


function Hero() {
  return (
    <div className='hero-container'>
      <video loop autoPlay muted >
        <source src='videos/video-1.mp4' type='video/mp4' />
      </video>
      <h1>OCEAN FOOTBALL</h1>
      <p>Get your daily football news!</p>
      <div className='hero-btns'>

      </div>
    </div>
  );
};

export default Hero;