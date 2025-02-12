import React from "react"
import "../../App.css"
import Hero from "../HeroSection"
import Cards from "../Cards"
import Footer from "../Footer"
import Interests from "../Interests"

function Home () {
    return (
        <>
            <Hero />
            <Cards />
            <Interests />
            <Footer />
        </>
    )
}

export default Home;