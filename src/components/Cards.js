import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import construction from "../public/images/under construction.png" 
import interknot from "../public/images/interknot.png"
import banksim from "../public/images/bank teller simulator.gif"

function Cards() {
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
            <ul className="cards_items">
                <CardItem 
                src={interknot}
                className="hidden"
                text="INTER-KNOT - A social media website, inspired by Zenless Zone Zero" 
                label="Next.js | Tailwind CSS"
                path="https://inter-knot.netlify.app/" 
                />
                <CardItem 
                src={banksim}
                className="hidden"
                text="Banking Simulator - A simulation game built in Next.js and Tailwind CSS, and a winner at Hack Knight 2025" 
                label="Hackathon Winner"
                path="https://devpost.com/software/banking-simulator-3wb1q8" 
                />
            </ul>
            <ul className="cards_items">
                <CardItem src={construction}
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
                <CardItem src={construction}
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
                <CardItem src={construction}
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards