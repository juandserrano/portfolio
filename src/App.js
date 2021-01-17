import React, { useEffect, useState } from "react";
import Resume from "./components/Resume";
import { Element } from "react-scroll"
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Portfolio2 from "./components/Portfolio2";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import About from "./components/About"
import Skills from "./components/Skills"
import CircleLoader from "react-spinners/CircleLoader"

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), Math.random()*3000)

  }, [])

  const notVisible = {
    visibility: "hidden",
    opacity: 0
  };
  const visible = {
    opacity: 1
  };

  return (
    <>
    <div id="loader-div">
      <CircleLoader style={{ opacity: loading ? 1 : 0 }} id="loader" color={"#FFAA00"} loading={loading} size={200} />
    </div>
    <div style={ loading ? notVisible : visible} id="all-content">
      <Navbar />
      <Element name="home" />
      <Home />
      <Element name="about" />
      <About />
      <Element name="resume" />
      <Resume />
      <Skills />
      <Element name="portfolio" />
      <Portfolio2 />
      <Element name="contact" />
      <Contacts />
      <Footer />
    </div>
    </>
  );
}

export default App;
