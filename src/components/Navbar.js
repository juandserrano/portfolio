import React from 'react'
import { Link } from "react-scroll"
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {

  
  return (
    
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <MenuIcon />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link" to="home" spy={true} smooth={true} duration={500}>home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="about" spy={true} smooth={true} duration={500}>about</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="resume" spy={true} smooth={true} duration={500}>resume</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="portfolio" spy={true} smooth={true} duration={500}>portfolio</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="contact" spy={true} smooth={true} duration={500}>contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
