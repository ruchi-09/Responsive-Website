import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for the better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences neede to excel in the dynamix field of education.</p>
            <button className='btn'>Explore More <img src={dark_arrow}/></button>
            </div>
      
    </div>
  )
}

export default Hero
