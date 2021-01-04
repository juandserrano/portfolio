import React from "react";
import Resume from "./components/Resume";
import { Route } from "react-router-dom";
import { Element } from "react-scroll"
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import CssBaseline from "@material-ui/core/CssBaseline";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  return (
    <>
      <Navbar />
      <Element name="home" />
      <Home />
      <Element name="about" />
      <About />
      <Element name="resume" />
      <Resume />
      <Element name="portfolio" />
      <Portfolio />
      <Element name="contact" />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
