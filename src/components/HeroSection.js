import React from 'react'
import { Button } from './Button'
import "./HeroSection.css"
import "../App.css"
import portrait from "../public/images/portrait.jpg"

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="portrait">
        <img src= {portrait} alt='portrait'></img>
      </div>
      <h1>Hey, I'm Carl</h1>
      <p>I'm a computer science student with an interest in web dev, video games, and illustration</p>
      <div className="hero-btns">
      <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
            Download Resume
        </Button>
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            Projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;