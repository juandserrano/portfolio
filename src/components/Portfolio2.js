import React from "react";
import "./Portfolio2.css";
import imgSerra from "../images/serra.PNG"
import imgDashboard from "../images/dashboard.png";
import imgWeather from "../images/weather.PNG";

const Portfolio2 = () => {
  return (
    <div className="container1">
      <div className="top-row">
        <div id="first" >
          <p>
            Messenger app built to privately chat and share pictures and video
            with the family - React, Firebase Cloudstore, Storage & Functions
          </p>
          <img src={imgSerra} />
        </div>
        <div id="second">
            <img src={imgSerra} />
          <p>
            Chill out listening to some free music with this web based music
            player - React
          </p>
        </div>
      </div>
      <div className="bottom-row" >
        <div id="third">
        <img src={imgWeather} />
          <p>
            PWA that shaws weather information using openweathermap's API -
            React
          </p>
        </div>
        <div id="fourth" >
          <p>
            Personal dashboard with to do list, activity tracker, pomodoro
            timer, clock, quote and joke of the day. - Vue, MongoDB, API calls,
            Authorization, Authentication with JsonWebTokens
          </p>
          <img src={imgDashboard} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
