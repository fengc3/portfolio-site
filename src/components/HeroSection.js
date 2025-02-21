import React from 'react'
import { Button } from './Button'
import { Link } from "react-router-dom"
import "./HeroSection.css"
import "../App.css"
import portrait from "../public/images/portrait.jpg"

function HeroSection() {
  let resume="https://www.dropbox.com/scl/fi/gjt5c5bwbf636yg2taul7/Carl-Feng-Resume.pdf?rlkey=k761z8ilrssnvreeqj86okd6y&e=1&st=is43a29x&dl=1"
  return (
    <div className="hero-container">
      <div className="portrait">
        <img src= {portrait} alt='portrait'></img>
      </div>
      <h1>Hey, I'm Carl</h1>
      <p>I'm a computer science student with an interest in front-end development, video games, and illustration</p>
      <div className="hero-btns">
        <Button linkTo={resume} className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          Download Resume
        </Button>
        <Button linkTo="#projects" className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          Projects
        </Button>
      </div>
      <div className="hero-socials">
        <Link className="social-icon-link-email" to="mailto:carlfeng3@gmail.com" target="_blank">
          <i className="fa fa-envelope" />
        </Link>
        <Link className="social-icon-link-linkedin" to="https://www.linkedin.com/in/carlfeng/" target="_blank">
          <i className="fab fa-linkedin" />
        </Link>
        <Link className="social-icon-link-github" to="https://github.com/fengc3" target="_blank">
          <i className="fab fa-github" />
        </Link>
      </div>
      </div>

  );
}

export default HeroSection;