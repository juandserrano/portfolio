import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    opacity: 0.9,
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: 0,
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar titulo={"Resume"} />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={classes.timeLineYear}>
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Fundacion Sol de los Andes
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem consequat fugiat laborum excepteur ex deserunt Lorem.
              Consequat excepteur occaecat aliquip exercitation anim cupidatat
              nulla adipisicing veniam in Lorem anim. Cillum est deserunt
              proident et reprehenderit aute. Sunt eiusmod in commodo culpa
              officia anim velit nisi ullamco nulla elit cillum deserunt Lorem.
              Occaecat velit qui elit esse minim culpa excepteur occaecat
              ullamco commodo quis adipisicing laboris magna.
            </Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={`${classes.timeLineYear}`}>
            2014
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Logistics
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Newell
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem consequat fugiat laborum excepteur ex deserunt Lorem.
              Consequat excepteur occaecat aliquip exercitation anim cupidatat
              nulla adipisicing veniam in Lorem anim. Cillum est deserunt
              proident et reprehenderit aute. Sunt eiusmod in commodo culpa
              officia anim velit nisi ullamco nulla elit cillum deserunt Lorem.
              Occaecat velit qui elit esse minim culpa excepteur occaecat
              ullamco commodo quis adipisicing laboris magna.
            </Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={`${classes.timeLineYear}`}>
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Javascript
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Newell Brands
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem consequat fugiat laborum excepteur ex deserunt Lorem.
              Consequat excepteur occaecat aliquip exercitation anim cupidatat
              nulla adipisicing veniam in Lorem anim. Cillum est deserunt
              proident et reprehenderit aute. Sunt eiusmod in commodo culpa
              officia anim velit nisi ullamco nulla elit cillum deserunt Lorem.
              Occaecat velit qui elit esse minim culpa excepteur occaecat
              ullamco commodo quis adipisicing laboris magna.
            </Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={`${classes.timeLineYear}`}>
            2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              MongoDB
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Own Projects
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem consequat fugiat laborum excepteur ex deserunt Lorem.
              Consequat excepteur occaecat aliquip exercitation anim cupidatat
              nulla adipisicing veniam in Lorem anim. Cillum est deserunt
              proident et reprehenderit aute. Sunt eiusmod in commodo culpa
              officia anim velit nisi ullamco nulla elit cillum deserunt Lorem.
              Occaecat velit qui elit esse minim culpa excepteur occaecat
              ullamco commodo quis adipisicing laboris magna.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
