import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";
import avatar from "../silent.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0.5rem auto",
    minWidth: 100,
    minHeight: 100,
  },
  title: {
    color: "#ffaa00",
    width: "100vw",
    textShadow: "2px 2px #000000",
    fontSize: "5vh",
  },
  subtitle: {
    color: "tan",
    width: "100vw",
    textShadow: "2px 2px 4px #000000",
    fontSize: "3vh",
  },
  completeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.completeContainer}>
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Juan Diego Serrano"
      />

      <Typography className={classes.title} align="center" variant="h4">
        <Typed strings={["Juan Diego Serrano"]} typeSpeed={80} />
      </Typography>

      <br />
      <Typography className={classes.subtitle} align="center" variant="h5">
        <Typed
          strings={[
            "Frontend",
            "Backend",
            "MERN Stack",
            "Project Management",
            "Logistics",
          ]}
          typeSpeed={50}
          loop
          backSpeed={30}
        />
      </Typography>
    </Box>
  );
};

export default Header;
