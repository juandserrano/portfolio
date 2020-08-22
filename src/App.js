import React from "react";
import Resume from "./components/Resume";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import CssBaseline from "@material-ui/core/CssBaseline";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
