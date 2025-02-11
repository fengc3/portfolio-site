import React from 'react'
import { Button } from './Button'
import "./HeroSection.css"
import "../App.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm Carl</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
      <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
            Download Resume
        </Button>
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;