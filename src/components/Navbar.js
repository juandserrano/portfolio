import React, {useState} from 'react'
import { Link } from "react-scroll"
import "./Navbar.css"

const Navbar = () => {

  const [activeLink, setActiveLink] = useState([0,0,0,0]);
  const toggleActiveLink = (linkNumber) => {
    setActiveLink[0,1,2,3] = 0;
    setActiveLink[linkNumber] = 1;
  }
  return (
    <nav>
      
          <Link className={activeLink[0] === 1 ? "activeLink" : "navLink"} to="home" spy={true} smooth={true} duration={500} onClick={toggleActiveLink(0)}>home</Link>
          <Link className={activeLink[1] === 1 ? "activeLink" : "navLink"} to="about" spy={true} smooth={true} duration={500} onClick={toggleActiveLink(1)}>about</Link>
          <Link className={activeLink[2] === 1 ? "activeLink" : "navLink"} to="resume" spy={true} smooth={true} duration={500} onClick={toggleActiveLink(2)}>resume</Link>
          <Link className={activeLink[3] === 1 ? "activeLink" : "navLink"} to="portfolio" spy={true} smooth={true} duration={500} onClick={toggleActiveLink(3)}>portfolio</Link>
          <Link className={activeLink[4] === 1 ? "activeLink" : "navLink"} to="contact" spy={true} smooth={true} duration={500} onClick={toggleActiveLink(4)}>contact</Link>
      
    </nav>
  )
}

export default Navbar
