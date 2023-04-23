import React, { useState } from "react";
import axios from "axios";
import "./WeatherCard.css";

export default function WeatherCard() {
  const api_key_weather = "4748cb98543c48d4b22132702231404";
  const location = "Chennai";
  let [info, setInfo] = useState([]);
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  async function getWeather() {
    try {
      let response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key_weather}&q=${location}&aqi=no`
      );
      let d = response.data;
      let season = d.current.condition.text;
      let wind = d.current.wind_kph;
      let pressure = d.current.pressure_mb;
      let humid = d.current.humidity;
      let timeAndDate = d.location.localtime.split(" ");
      let time = tConvert(timeAndDate[1]);
      let date = timeAndDate[0]
        .substring(5)
        .concat("-", timeAndDate[0].substring(0, 4));
      let temp = d.current.temp_c;
      let icon;
      let h = new Date().getHours();
      let isDayTime = h > 6 && h < 20;
      response = await axios.get(
        "https://www.weatherapi.com/docs/weather_conditions.json"
      );
      d = response.data;

      if (isDayTime === true) {
        for (let i = 0; i < 47; i++) {
          if (d[i].day === season) icon = `day/${d[i].icon}.png`;
        }
      } else {
        for (let i = 0; i < 47; i++) {
          if (d[i].night === season) icon = `night/${d[i].icon}.png`;
        }
      }
      setInfo([season, wind, pressure, humid, time, date, temp, icon]);
      // console.log(info);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="weather-card" onLoad={getWeather}>
      <div className="dateAndTime">
        <p className="date">2-20-2023</p>
        <p className="time">07:35 PM</p>
      </div>
      <div className="info">
        <div className="season">
          <img src="day/200.png" alt="" className="season-icon" />
          <p className="season-name">Heavy rain</p>
        </div>
        <img src="line.png" alt="" className="line" />
        <div className="tempAndPressure">
          <p className="temp">24°C</p>
          <div className="pressureAndIcon">
            <img src="pressure.png" alt="" className="pressure-icon" />
            <p className="pressure-value">
              1010 mbar <br /> Pressure
            </p>
          </div>
        </div>
        <img src="line.png" alt="" className="line" />
        <div className="windAndHumidity">
          <div className="wind">
            <img src="wind.png" alt="" className="wind-icon" />
            <p className="wind-value">
              3.7 km/h <br />
              Wind{" "}
            </p>
          </div>
          <div className="humidity">
            <img src="humid.png" alt="" className="humid-icon" />
            <p className="humid-value">
              83% <br />
              Humidity{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
