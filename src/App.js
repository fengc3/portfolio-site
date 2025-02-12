import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

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
          <Route path='/services' element= {<Services />} />
          <Route path='/products' element= {<Products />} />
          <Route path='/sign-up' element= {<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
