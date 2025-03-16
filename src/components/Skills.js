import React from 'react'
import "./Skills.css"

function Skills() {
  return (
    <div className='skills-container' id="skills">
      <div className='education'>
        <h2>Education</h2>
        <p>Bachelor of Arts, Computer Science</p>
        <p>Queens College, City University of New York</p>
      </div>
      <div className='languages'>
        <h2>Languages and Frameworks</h2>
        <p>JavaScript, HTML, CSS, Next.js, React, Tailwind CSS</p>
      </div>
      <div className='software'>
        <h2>Software</h2>
        <p>GitHub, Git, Jira, Docker</p>
      </div>
    </div>
  )
}

export default Skills
