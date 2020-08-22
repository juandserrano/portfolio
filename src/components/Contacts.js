import React from "react";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { ContactMail, ContactPhone, Send } from "@material-ui/icons";
import Navbar from "./Navbar";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    background: "rgba(0,0,0,0.6)",
    padding: 30,
    borderRadius: 20,
    width: "95%",
    maxWidth: 500,
    boxShadow: "2px 2px 2px black",
  },
  mainDiv: {
    height: "100%",
  },
  mainGrid: {
    marginTop: 100,
  },
  button: {
    color: "blue",
    borderColor: "blue",
    margin: "20px auto 0px auto",
    boxShadow: "2px 2px 2px black",
  },
  header: {
    color: "tomato",
    textShadow: "2px 2px 2px black",
    marginBottom: 10,
    textAlign: "center",
  },
});

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainDiv}>
      <Navbar titulo="Contact me" />

      <Grid
        container
        component="form"
        justify="center"
        className={classes.form}
      >
        <Grid item>
          <Typography className={classes.header} variant="h3">
            Hire or contact me:
          </Typography>
        </Grid>
        <Grid item>
          <InputField
            fullWidth={false}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
        </Grid>
        <Grid item>
          <InputField
            fullWidth={false}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
        </Grid>
        <Grid item>
          <InputField
            fullWidth={false}
            label="Company name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            fullWidth={false}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact me!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
