import React from "react";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Twitter, Instagram, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "rgb(50,50,50)",
    width: 250,
  },
  buttons: {
    "&:hover": {
      color: "tomato",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <Grid container justify="space-around">
          <IconButton color="inherit" href="" className={classes.buttons}>
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="" className={classes.buttons}>
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="" className={classes.buttons}>
            <LinkedIn />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
