import React from 'react'
import { Link } from "react-scroll"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>home</Link>
        </li>
        <li>
          <Link to="resume" spy={true} smooth={true} duration={500}>resume</Link>
        </li>
        <li>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>portfolio</Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
