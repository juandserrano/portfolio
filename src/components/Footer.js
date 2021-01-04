import React from "react";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LinkedIn, GitHub } from "@material-ui/icons";

const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "rgba(30, 30, 40, 0.7)",
    width: 100,
    borderRadius: "10px",
    padding: "0 !important",
  },
  buttons: {
    "&:hover": {
      color: "#FFAA00",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <Grid container justify="space-around">
          <IconButton color="inherit" href="http://www.github.com/juandserrano" className={classes.buttons}>
            <GitHub />
          </IconButton>
          <IconButton color="inherit" href="http://www.linkedin.com/in/juandserrano" className={classes.buttons}>
            <LinkedIn />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
