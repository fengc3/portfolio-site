import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
  return (
    <div className="projects">
      <h1>Check out my projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
            <ul className="cards_items">
                <CardItem 
                src="/"
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
                <CardItem 
                src="/" 
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
            </ul>
            <ul className="cards_items">
                <CardItem src="/" 
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
                <CardItem src="/" 
                text="Work in Progress..." 
                label="Coming soon"
                path="/" 
                />
                <CardItem src="/" 
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