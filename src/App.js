import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  const jumpToSection = (section) => {const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const offset = 79
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - offset, // Apply the offset
              behavior: 'smooth',
            });
    }
  }

  return (
    <>
      <Router>
        <Navbar jumpToSection={jumpToSection}/>
        <Routes>
          <Route path='/' exact element= {<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
