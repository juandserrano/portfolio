import React from 'react'
import {Paper} from "@material-ui/core"
import "./About.css"
import photo from "../images/avatar1.png"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    mainContainer: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vw",
    margin: "20vh 10vw 20vh 10vw",
    borderRadius: "30px",
    backgroundColor: "rgba(220,220,220,0.9)",
    boxShadow: "2px 2px 5px black"
    }
  });

const About = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainContainer}>
            <h4 className="aboutTitle">About me</h4>
        <div className="mainInfo">
        <img id="myPhoto" src={photo} />
        
        <p id="text">
            Bachelor in Industrial Engineering from the Javeriana University with a Master’s degree in Logistics from the University Duisburg-Essen in Germany. Creative, honest, confident and with knowledge on systems and informatics, open minded and with a great ability to learn new things. With excellent English and basic German skills. I am known for being analytic, responsible, charismatic, leader, and have great relationships with the rest. Because of that, I am a very good teamwork member. Have substantial experience in Project management, Logistics, Productivity and Social Service & Responsibility. Currently I am the SAP Business Process Champion for the WM, OTC and BW modules for Latin America and process engineer in charge of productivity projects on the different distribution centers at Newell Rubbermaid. Specially focused in process optimization, productivity and warehouse supervision, layout design and slotting. Willing and eager to learn new things that help me as well as my company grow and improve myself every day.
        </p>
        </div>
        
        </Paper>
        
    )
}

export default About
