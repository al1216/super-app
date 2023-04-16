import React, { useState } from "react";
import "./LeftHomePage.css";
import axios from "axios";

function LeftHomePage() {
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  let genres = JSON.parse(localStorage.getItem("categoriesOfUsers"));
  const api_key_weather = '4748cb98543c48d4b22132702231404';
  const location = 'Chennai';
  let [info, setInfo] = useState([]);

  function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

  async function getWeather() {
    try {
      let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key_weather}&q=${location}&aqi=no`);
      let d = response.data;
      let season = d.current.condition.text;
      let wind = d.current.wind_kph;
      let pressure = d.current.pressure_mb;
      let humid = d.current.humidity;
      let timeAndDate = d.location.localtime.split(" ");
      let time = tConvert(timeAndDate[1]);
      let date = timeAndDate[0].substring(5).concat("-",timeAndDate[0].substring(0,4));
      let temp = d.current.temp_c;
      let icon = d.current.condition.icon.substring(2);
      setInfo([season,wind,pressure,humid,time,date,temp,icon]);
      // console.log(info);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="left-homepage" onLoad={getWeather}>
      <div className="profile-card">
        <div className="avatar">
          <img src="avatar.png" alt="" className="avatar" />
        </div>
        <div className="userAndGenre">
          <div className="user">
            <h2 className="name-profile">{userDetails[0]}</h2>
            <h2 className="email-profile">{userDetails[2]}</h2>
            <h1 className="username-profile">{userDetails[1]}</h1>
          </div>
          <div className="genre">
            {genres.map((option) => (
              <>
                <div className="show-genre">
                  <p className="option" key={option}>
                    {option}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="weather-card">
        <div className="dateAndTime">
          <p className="date">{info[5]}</p>
          <p className="time">{info[4]}</p>
        </div>
        <div className="info">
          <div className="season">
            <img src="rain.png" alt="" className="season-icon" />
            <p className="season-name">{info[0]}</p>
          </div>
          <img src="line.png" alt="" className="line" />
          <div className="tempAndPressure">
            <p className="temp">{info[6]}°C</p>
            <div className="pressureAndIcon">
              <img src="pressure.png" alt="" className="pressure-icon" />
              <p className="pressure-value">{info[2]} mbar <br /> Pressure</p>
            </div>
          </div>
          <img src="line.png" alt="" className="line" />
          <div className="windAndHumidity">
            <div className="wind">
              <img src="wind.png" alt="" className="wind-icon" />
              <p className="wind-value">{info[1]} km/h <br />Wind </p>
            </div>
            <div className="humidity">
              <img src="humid.png" alt="" className="humid-icon" />
              <p className="humid-value">{info[3]}% <br />Humidity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHomePage;
