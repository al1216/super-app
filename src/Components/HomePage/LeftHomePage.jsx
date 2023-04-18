import React from "react";
import "./LeftHomePage.css";
import ProfileCard from "./ProfileCard.jsx";
import WeatherCard from "./WeatherCard.jsx";
import Notes from "./Notes.jsx";
import Timer from "./Timer.jsx";

function LeftHomePage() {
  return (
    <div className="left-homepage">
      <div className="upperHalf">
        <div className="profileAndWeather">
          <ProfileCard />
          <WeatherCard />
        </div>
        <Notes />
      </div>
      <div className="lowerHalf">
        <Timer />
      </div>
    </div>
  );
}

export default LeftHomePage;
