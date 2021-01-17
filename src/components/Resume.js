import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgb(30,30,40)",
    opacity: 0.9,
    paddingTop: 60,
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
      borderColor: "#FFAA00 #FFAA00 transparent transparent",
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
        borderColor: "transparent transparent #FFAA00 #FFAA00",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.2rem",
    background: "#FFAA00",
    color: "rgb(30, 30, 40)",
    lineHeight: 1,
    padding: "0.5rem 0 0.5rem",
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
  heading: {
    color: "#FFAA00",
    padding: "3rem 0",
    textTransform: "uppercase",
    fontWeight: "bold",
    textShadow: "2px 2px 5px black",
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
     
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" style={{fontFamily: "'Redressed', cursive"}} className={classes.heading}>
          Experience
        </Typography>

        {/* ITEMS */}
        {experience.map((item) => (
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              {item.year}
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {item.experience}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "#FFAA00" }}
              >
                {item.company}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tan" }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

const experience = [
  {
    year: "2012-2020",
    company: "Newell Brands",
    experience: "LATAM Engineering Lead",
    text: `IT Support | Project Management | SAP Business Process Champion | BW & WM Reporting | Data Analysis | Productivity/KPIs control | Application deployment & automation | RFQ/RFP`,
  },
  {
    year: "2008-Current",
    company: "Fundacion Sol de los Andes",
    experience: "Computer Support Technician",
    text: `IT Consulting | End-User Support & Troubleshooting | Software/Hardware Upgrades`,
  },
  
  {
    year: "2008-2010",
    company: "Newell Rubbermaid",
    experience: "Logistics Analyst",
    text: `Operational Analysis & Optimization,
          Layout Design & Slotting, Inventory Management, Negotiation`,
  },
  
];

export default Resume;
