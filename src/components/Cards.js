import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import construction from "../public/images/under construction.png" 

function Cards() {
  return (
    <div className="projects">
      <h1>Check out my projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
            <ul className="cards_items">
                <CardItem 
                src={construction}
                text="Work in Progress... this project is currently under supervision by Safety" 
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