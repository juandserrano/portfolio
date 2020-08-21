import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import Header from "./Header";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    zIndex: -1,
    height: "100vh",
    width: "100vw",
    opacity: 0.1,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Particles
        className={classes.particlesCanvas}
        params={{
          particles: {
            collisions: {
              enable: true,
              mode: "bounce",
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.1,
                  speed: 3,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 0.5,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
