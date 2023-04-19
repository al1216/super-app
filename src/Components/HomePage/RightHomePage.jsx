import React, { useState, useEffect } from "react";
import "./RightHomePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RightHomePage() {
  let naviagte = useNavigate();
  const api_key_news = "cc9872637464488daad0dd749a016dae";
  // const api_key_news = 'eb48da38f71b43adb91ed12f2ea452d3';
  const api_key_weather = "4748cb98543c48d4b22132702231404";
  const location = "Chennai";

  let [info, setInfo] = useState([]);
  let [news, setNews] = useState([]);

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
      let timeAndDate = d.location.localtime.split(" ");
      let time = tConvert(timeAndDate[1]);
      let date = timeAndDate[0]
        .substring(5)
        .concat("-", timeAndDate[0].substring(0, 4));
      setInfo([time, date]);
      // console.log(info);
    } catch (err) {
      console.log(err);
    }
  }

  async function getNews() {
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=2&apiKey=${api_key_news}`
      );
      let d = response.data;
      let title = d.articles[0].title;
      let desc = d.articles[0].description;
      let urlImage = d.articles[0].urlToImage;
      let urlNews = d.articles[0].url;
      setNews([title, desc, urlImage, urlNews]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getNews();
    // getWeather();
  }, [info]);

  let onClick = () => {
    window.open(news[3], "_blank");
  };

  let browse = () => {
    naviagte('/next')
  }
  return (
    <div className="news-card" onLoad={getWeather}>
      <div className="news-image" onClick={() => onClick()}>
        <img src={news[2]} alt="" className="img" />
      </div>
      <div className="news-overview-caption" onClick={() => onClick()}>
        <p className="caption-news">{news[0]}</p>
        <p className="dateTime">
          {info[1]} | {info[0]}
        </p>
      </div>
      <div className="news-overview" onClick={() => onClick()}>
        <p className="news-content">{news[1]}</p>
      </div>
      <div className="wrapper-browse">
        <button className="browse" onClick={() => browse()}>Browse</button>
      </div>
    </div>
  );
}

export default RightHomePage;
