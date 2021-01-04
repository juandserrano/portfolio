import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import Navbar from "./Navbar";
import dashboardImg from "../images/dashboard.png";
import dndImg from "../images/dnd.png";
import serraImg from "../images/serra.PNG";
import weatherImg from "../images/weather.PNG";

const useStyles = makeStyles((theme) => ({
  cardPic: {
    margin: "0 auto",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      maxHeight: 350,
    },
  },
  paper: {
    borderRadius: 20,
    maxWidth: 1200,
    minHeight: 250,
    margin: "10px",
    padding: "20px",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
      
      transition: "all 1s ease-in-out",
      
      
    },
  },
  mainBox: {
    paddingTop: 60,
   // height: "100vh",
  },
  boton: {
    justifySelf: "center",
  },
  header: {
    color: "#FFAA00",
    padding: "3rem 0",
    textTransform: "uppercase",
    fontWeight: "bold"

  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      
      <Typography variant="h4" className={classes.header} align="center">
        Projects
      </Typography>
      <br />
      <br />
      <Grid container justify="center" alignItems="center">
        {projectos.map((project, key) => (
          <Grid item xs={10} md={5} key={key}>
            <Paper elevation={3} className={classes.paper}>
              <Grid
                container
                style={{ height: "100%" }}
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} md={5}>
                  <CardMedia
                    component="img"
                    alt={project.nombre}
                    image={project.imagen}
                    className={classes.cardPic}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography gutterBottom variant="h5">
                    {project.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="secondary"
                    component="p"
                    style={{ color: "tan" }}
                  >
                    {project.descripcion}
                  </Typography>
                  <br />
                  <Grid container item xs={12} justify="center">
                    <Button size="large" color="primary" href={project.link}>
                      <Typography>Live Demo</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const projectos = [
  {
    nombre: "Serra - Music Player",
    imagen: serraImg,
    descripcion: "Chill out listening to some free music with this web based music player. - React",
    link: "https://music.jserrano.net",
  },
  {
    nombre: "Dashboard",
    imagen: dashboardImg,
    descripcion:
      "Personal dashboard with to do list, activity tracker, pomodoro timer, clock, quote and joke of the day. - Vuejs, MongoDB, API calls, Authorization, Authentication with JsonWebTokens",
    link: "https://dashboard-jds.now.sh/",
  },
  {
    nombre: "Weather App",
    imagen: weatherImg,
    descripcion:
      "PWA that shaws weather information using openweathermap's API - Reactjs",
    link: "https://t-weather.jserrano.net/",
  },
  {
    nombre: "DnD Monster Hunt",
    imagen: dndImg,
    descripcion:
      "Simple game to practice HTML, CSS, mongoose/MongoDB with an expressjs backend - Vuejs, MongoDB",
    link: "https://dndslayer.herokuapp.com/",
  },
  
  
];

export default Portfolio;
