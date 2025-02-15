import { Link } from "react-router-dom"
import React, { useState } from 'react'
import "./Navbar.css"
// import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false);
    // const[button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton()
    // }, []);

    // window.addEventListener("resize", showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-name" onClick={()=>{closeMobileMenu(); window.scrollTo({top: 0, behavior: "smooth"})}}>
                        Carl Feng
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={() => {closeMobileMenu(); window.scrollTo({top: 0, behavior: "smooth"})}}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-links" onClick={() => {closeMobileMenu();}}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#interests" className="nav-links" onClick={closeMobileMenu}>
                                Hobbies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacts" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact Me
                            </a>
                        </li>
                    </ul>
                    {/* {button && <Button linkTo="#contacts" buttonStyle="btn--outline">Contact</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;