import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import construction from "../public/images/under construction.png" 

function Cards() {
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
            <ul className="cards_items">
                <CardItem 
                src={construction}
                text="Work in Progress... This project is currently under the supervision of Safety." 
                label="Coming soon"
                path="/" 
                />
                <CardItem 
                src={construction}
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
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