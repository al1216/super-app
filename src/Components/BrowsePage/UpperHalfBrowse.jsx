import React from "react";
import "./UpperHalfBrowse.css";
import { useNavigate } from "react-router-dom";

export default function UpperHalfBrowse() {
  let navigate = useNavigate();

  let onClick = () => {
    navigate("/homePage");
  };
  return (
    <div className="upper-browse">
      <h1 className="heading">Super App</h1>
      <img src="avatar-1.png" alt="" className="avatar-1" onClick={onClick} />
    </div>
  );
}
