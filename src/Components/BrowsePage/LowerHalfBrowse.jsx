import React from "react";
import "./LowerHalfBrowse.css";

let allUrls = JSON.parse(localStorage.getItem("allUrls"));
let genre = JSON.parse(localStorage.getItem("categoriesOfUsers"));
let arr = [];

for(let i = 0; i < ((allUrls != null) && allUrls.length); i++){
    let obj = {};
    obj.key = genre[i];
    obj.urls = allUrls[i];
    arr.push(obj);
}

// console.log(arr);

function LowerHalfBrowse() {
  return (
    <div className="lower-browse">
      <p className="caption-browse">Entertainment according to your choice</p>

      <div className="movies-genres-img-title">
        {arr.map((option) => (
          <>
            <p className="title-genre">{option.key}</p>
            <div className="movies-img">
              <img src={option.urls[0]} alt="" className="img-one-by-one" />
              <img src={option.urls[1]} alt="" className="img-one-by-one" />
              <img src={option.urls[2]} alt="" className="img-one-by-one" />
              <img src={option.urls[3]} alt="" className="img-one-by-one" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default LowerHalfBrowse;
