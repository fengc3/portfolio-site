import { React, useEffect} from 'react'
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    }, [])

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
