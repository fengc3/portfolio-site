import React from 'react'
import "./Interests.css"
// import portrait from "../public/images/Bruh.png"
import ellen from "../public/images/46 crop.png"
import bloom from "../public/images/bloom crop.png"
import haru from "../public/images/haru zoom.png"
import jia from "../public/images/Jia crop.png"

function Interests() {
  return (
    <div className="hobby-container" id="interests">
      <h1>My Drawings</h1>
      {/* <div className="drawing-gallery"> */}
        <div className="image-container">
            <img src={ellen} alt="" data-image-id="1" />
            <img src={bloom} alt="" data-image-id="2" /> 
            <img src={haru} alt="" data-image-id="3" />
            <img src={jia} alt="" data-image-id="4" />
            {/* <img src={"/"} alt="" data-image-id="5"/>
            <img src={"/"} alt="" data-image-id="6" />
            <img src={"/"} alt="" data-image-id="7" /> */}
        </div>
      {/* </div> */}
    </div>
  )
}

export default Interests