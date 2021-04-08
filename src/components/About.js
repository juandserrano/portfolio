import React from 'react'
import {Paper} from "@material-ui/core"
import "./About.css"
import photo from "../images/avatar1.png"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    mainContainer: {
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5vw",
        margin: "10vh 10vw 20vh 10vw",
        borderRadius: "30px",
        backgroundColor: "rgba(220,220,220,0.9)",
        boxShadow: "2px 2px 5px black"
    }
  });

const About = () => {
    const classes = useStyles();
    return (
        <div style={{display: "flex", minHeight: "100vh", alignItems: "center"}}>
        <Paper className={classes.mainContainer}>
            <h4 className="aboutTitle">About me</h4>
        <div className="mainInfo">
            <img id="myPhoto" src={photo} />
            <div className="info" style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                <p className="text">
                    Hi There! I´m a web developer and your go-to IT guy. I´ve been teaching myself IT and coding since the early 2000s. I´m a Bachelor in Engineering with a Master´s in Logistics, 
                    who in 2017 decided to pursue my passion as a career in the IT field.
                </p>
                <p className="text">
                    Knowledge in AWS, Azure and Firebase, with a recent certification on Azure Fundamentals. Aside from IT knowledge, 
                    I have substantial experience in Project management, Logistics and SAP. Willing and eager to learn new things that help me, as well as companies, grow and improve myself every day.
                </p>
                <p className="text">
                    I´m also a Member of the board of “Sol de los Andes” Foundation since 2007, an non-profit dedicated to developing community 
                    projects focused on vulnerable teenagers and people with special educational needs (deafness, blindness, and multiple disabilities).
                </p>
            </div>
        </div>
        
        </Paper>
        </div>
    )
}

export default About
