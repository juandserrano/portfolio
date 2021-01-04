import React from "react";
import Particles from "react-particles-js";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import Header from "./Header";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    zIndex: -1,
    height: "100vh",
    width: "100%",
    opacity: 0.4,
  },
  mainBox: {
    height: "100vh",
    //background: "rgba(0,0,0,0)",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
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
      
      <Header />
    </Box>
  );
};

export default Home;
