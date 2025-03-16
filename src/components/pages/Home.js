import React from "react"
import "../../App.css"
import Hero from "../HeroSection"
import Cards from "../Cards"
import Footer from "../Footer"
import Interests from "../Interests"
import Skills from "../Skills"

function Home () {
    return (
        <>
            <Hero />
            <Cards />
            <Skills />
            <Interests />
            <Footer />
        </>
    )
}

export default Home;