import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

export default function Timer() {
  let [hours, setHours] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [seconds, setSeconds] = useState("00");

  let [activeHours, setActiveHours] = useState("00");
  let [activeMinutes, setActiveMinutes] = useState("00");
  let [activeSeconds, setActiveSeconds] = useState("00");
  let [status, setStatus] = useState(false);

  let h, m, s, totalMinutes;
  let totalSeconds =
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  let increment_hour = () => {
    let temp = Number(hours);
    temp++;
    if (temp <= 9) setHours("0" + temp);
    else setHours(temp);
  };
  let increment_minute = () => {
    let temp = Number(minutes);
    temp++;
    if (temp <= 9) setMinutes("0" + temp);
    else setMinutes(temp);
  };
  let increment_second = () => {
    let temp = Number(seconds);
    temp++;
    if (temp <= 9) setSeconds("0" + temp);
    else setSeconds(temp);
  };

  let decrement_hour = () => {
    let temp = Number(hours);
    if (temp >= 1) {
      temp--;
      if (temp <= 9) setHours("0" + temp);
      else setHours(temp);
    }
  };

  let decrement_minute = () => {
    let temp = Number(minutes);
    if (temp >= 1) {
      temp--;
      if (temp <= 9) setMinutes("0" + temp);
      else setMinutes(temp);
    }
  };

  let decrement_second = () => {
    let temp = Number(seconds);
    if (temp >= 1) {
      temp--;
      if (temp <= 9) setSeconds("0" + temp);
      else setSeconds(temp);
    }
  };

  let start = () => {
    setActiveHours(hours);
    setActiveMinutes(minutes);
    setActiveSeconds(seconds);
    setStatus(true);
    startTimer();
  };

  function getZeroDigit(d) {
    let temp = "0";
    if (d <= 9) return temp.concat(d);
    else return d;
  }

  function startTimer() {
    let interval = setInterval(() => {
      if (totalSeconds <= 0) clearInterval(interval);

      totalMinutes = Math.floor(totalSeconds / 60);
      h = Math.floor(totalMinutes / 60);
      m = minutes = totalMinutes % 60;
      s = totalSeconds % 60;
      h = getZeroDigit(h);
      m = getZeroDigit(m);
      s = getZeroDigit(s);
      setActiveHours(h);
      setActiveMinutes(m);
      setActiveSeconds(s);

      totalSeconds--;
    }, 1000);
  }
  return (
    <div className="timer-card">
      <div className="time-circle">
        <div className="time-wrapper">
          {status && (
            <CountdownCircleTimer
              isPlaying
              size={220}
              rotation="counterclockwise"
              duration={totalSeconds+1}
              colors="#FF6A6A"
              colorsTime={[0]}
              onComplete={() => {
                setStatus(false);
                let audio = new Audio("clock-ring.mp3");
                audio.play();
              }}
              trailColor="#191E39"
            ></CountdownCircleTimer>
          )}
        </div>
        <p className="feed-time">
          {activeHours}:{activeMinutes}:{activeSeconds}
        </p>
      </div>
      <div className="time-show">
        <div className="set-time">
          <div className="hours">
            <p className="hours">Hours</p>
            <div className="wrapper-time">
              <img
                src="up.png"
                alt=""
                className="up-icon"
                onClick={increment_hour}
              />
              <p className="hours-time">{hours}</p>
              <img
                src="down.png"
                alt=""
                className="down-icon"
                onClick={decrement_hour}
              />
            </div>
          </div>
          <p className="colon">:</p>
          <div className="minutes">
            <p className="minutes">Minutes</p>
            <div className="wrapper-time">
              <img
                src="up.png"
                alt=""
                className="up-icon"
                onClick={increment_minute}
              />
              <p className="hours-time">{minutes}</p>
              <img
                src="down.png"
                alt=""
                className="down-icon"
                onClick={decrement_minute}
              />
            </div>
          </div>
          <p className="colon">:</p>
          <div className="seconds">
            <p className="seconds">Seconds</p>
            <div className="wrapper-time">
              <img
                src="up.png"
                alt=""
                className="up-icon"
                onClick={increment_second}
              />
              <p className="hours-time">{seconds}</p>
              <img
                src="down.png"
                alt=""
                className="down-icon"
                onClick={decrement_second}
              />
            </div>
          </div>
        </div>
        <div className="start-button">
          <button className="start" onClick={start}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
