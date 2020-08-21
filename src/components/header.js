import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";
import avatar from "../images/avatar1.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0.5rem auto",
    minWidth: 200,
    minHeight: 200,
    border: "solid black",
  },
  title: {
    color: "#ffaa00",
    textShadow: "2px 2px #000000",
    fontSize: "5vh",
    minWidth: 230,
  },
  subtitle: {
    color: "tan",
    textShadow: "2px 2px 0px #000000",
    fontSize: "3vh",
    textAlign: "center",
    minWidth: 235,
  },
  completeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "70px",
    padding: "20px 40px 20px 40px",
    width: 413,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
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
