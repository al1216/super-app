import React from "react";
import LeftHomePage from "./LeftHomePage.jsx";
import RightHomePage from "./RightHomePage.jsx";
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <LeftHomePage />
      <RightHomePage />
    </div>
  );
}
