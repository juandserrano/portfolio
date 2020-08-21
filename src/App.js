import React from "react";
import Resume from "./components/Resume";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
    </>
  );
}

export default App;
