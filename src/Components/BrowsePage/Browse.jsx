import React from "react";
import UpperHalfBrowse from "./UpperHalfBrowse.jsx";
import LowerHalfBrowse from "./LowerHalfBrowse.jsx";
import "./Browse.css";

export default function Browse() {
  return (
    <>
      <div className="browse-page">
        <UpperHalfBrowse />
        <LowerHalfBrowse />
      </div>
    </>
  );
}
