import React, { useState, useEffect, useRef } from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let allUrls = [];

function Category() {
  let [genre, setGenre] = useState([]);
  let [status,setStatus] = useState('');
  let action_ref = useRef(null);
  let drama_ref = useRef(null);
  let romance_ref = useRef(null);
  let thriller_ref = useRef(null);
  let western_ref = useRef(null);
  let horror_ref = useRef(null);
  let fantasy_ref = useRef(null);
  let music_ref = useRef(null);
  let fiction_ref = useRef(null);
  let naviagte = useNavigate();
  
  let styling = "border: solid #11B800";
  let colours = [
    "#11B800",
    "#D7A4FF",
    "#148A08",
    "#84C2FF",
    "#902500",
    "#7358FF",
    "#FF4ADE",
    "#E61E32",
    "#6CD061",
  ];

  let deleteOption = (value) => {
    setGenre((oldValues) => {
      return oldValues.filter((skill) => skill !== value);
    });

    if (value === "Action") action_ref.current.style = `border: ${colours[0]}`;
    else if (value === "Drama") drama_ref.current.style = `border: ${colours[1]}`;
    else if (value === "Romance") romance_ref.current.style = `border: ${colours[2]}`;
    else if (value === "Thriller") thriller_ref.current.style = `border: ${colours[3]}`;
    else if (value === "Western") western_ref.current.style = `border: ${colours[4]}`;
    else if (value === "Horror") horror_ref.current.style = `border: ${colours[5]}`;
    else if (value === "Fantasy") fantasy_ref.current.style = `border: ${colours[6]}`;
    else if (value === "Music") music_ref.current.style = `border: ${colours[7]}`;
    else if (value === "Fiction") fiction_ref.current.style = `border: ${colours[8]}`;
  };

  useEffect(() => {
    // eslint-disable-next-line
    genre.map((option) => {
      if (option === "Action") action_ref.current.style = styling;
      else if (option === "Drama") drama_ref.current.style = styling;
      else if (option === "Romance") romance_ref.current.style = styling;
      else if (option === "Thriller") thriller_ref.current.style = styling;
      else if (option === "Western") western_ref.current.style = styling;
      else if (option === "Horror") horror_ref.current.style = styling;
      else if (option === "Fantasy") fantasy_ref.current.style = styling;
      else if (option === "Music") music_ref.current.style = styling;
      else if (option === "Fiction") fiction_ref.current.style = styling;
    });
  }, [genre, styling]);

  async function get(type) {
    
    if (type === "fiction") type = "mystery";
    if (type === "music") type = "musical";

    // console.log(type);
    let img_urls = [];
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/title/v2/find",
      params: {
        title: "a",
        titleType: "movie",
        limit: "4",
        sortArg: "moviemeter,asc",
        genre: type,
        releaseDateMin: "2022-01-01",
        primaryLanguage: "en",
      },
      headers: {
        "X-RapidAPI-Key": "7f5c171f84mshffbe479ac919af3p1a2dcdjsnb68948cc80f9",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };
  
    let response = await axios.request(options);
    let d = response.data;
    for (let i = 0; i < 4; i++) {
      img_urls[i] = d.results[i].image.url;
      // console.log(type,img_urls[i]);
    }
  
    // console.log(img_urls);
    return img_urls;
  }

  async function onLoad() {
    console.log("entered");
    for (let i = 0; i < genre.length; i++) {
      allUrls[i] = await get(genre[i].toLowerCase());
    }
    for (let i = 0; i < genre.length; i++) {
      console.log(genre[i]);
      for (let j = 0; j < 4; j++) {
        console.log(allUrls[i][j]);
      }
    }
    //   console.log(allUrls);
    // console.log(allUrls);
    localStorage.setItem("allUrls",JSON.stringify(allUrls));
  }

  async function onClick() {
    if (genre.length >= 3){
      onLoad();
      setStatus('');
      localStorage.setItem("categoriesOfUsers",JSON.stringify(genre));
      naviagte('/homePage');
    }
    else{
      setStatus('Please select atleast 3 Genre');
    }
  }

  return (
    <>
      <div className="category-selection">
        <div className="left-category">
          <h1 className="heading">Super app</h1>
          <h1
            className="caption"
            style={{ paddingLeft: 0, marginBottom: 0, paddingBottom: "4rem" }}
          >
            Choose your <br /> entertainment <br /> category
          </h1>
          <div className="genres-section">
            {genre.map((option) => (
              <>
                <div className="show-genre">
                  <p className="option" key={option}>
                    {option}
                  </p>
                  <p className="close" onClick={() => deleteOption(option)}>
                    X
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="right-category">
          <div className="row-1">
            <div
              ref={action_ref}
              className="card action"
              onClick={() => {
                if (!genre.includes("Action")) setGenre([...genre, "Action"]);
              }}
            >
              <p className="genre">Action</p>
              <img src="action.png" alt="" className="action-img" />
            </div>
            <div
              ref={drama_ref}
              className="card drama"
              onClick={() => {
                if (!genre.includes("Drama")) setGenre([...genre, "Drama"]);
              }}
            >
              <p className="genre">Drama</p>
              <img src="drama.png" alt="" className="drama-img" />
            </div>
            <div
              ref={romance_ref}
              className="card romance"
              onClick={() => {
                if (!genre.includes("Romance")) setGenre([...genre, "Romance"]);
              }}
            >
              <p className="genre">Romance</p>
              <img src="romance.png" alt="" className="romance-img" />
            </div>
          </div>
          <div className="row-2">
            <div
              ref={thriller_ref}
              className="card thriller"
              onClick={() => {
                if (!genre.includes("Thriller"))
                  setGenre([...genre, "Thriller"]);
              }}
            >
              <p className="genre">Thriller</p>
              <img src="thriller.png" alt="" className="thriller-img" />
            </div>
            <div
            ref={western_ref}
              className="card western"
              onClick={() => {
                if (!genre.includes("Western")) setGenre([...genre, "Western"]);
              }}
            >
              <p className="genre">Western</p>
              <img src="western.png" alt="" className="western-img" />
            </div>
            <div
            ref={horror_ref}
              className="card horror"
              onClick={() => {
                if (!genre.includes("Horror")) setGenre([...genre, "Horror"]);
              }}
            >
              <p className="genre">Horror</p>
              <img src="horror.png" alt="" className="horror-img" />
            </div>
          </div>
          <div className="row-3">
            <div
            ref={fantasy_ref}
              className="card fantasy"
              onClick={() => {
                if (!genre.includes("Fantasy")) setGenre([...genre, "Fantasy"]);
              }}
            >
              <p className="genre">Fantasy</p>
              <img src="fantasy.png" alt="" className="fantasy-img" />
            </div>
            <div
            ref={music_ref}
              className="card music"
              onClick={() => {
                if (!genre.includes("Music")) setGenre([...genre, "Music"]);
              }}
            >
              <p className="genre">Music</p>
              <img src="music.png" alt="" className="music-img" />
            </div>
            <div
            ref={fiction_ref}
              className="card fiction"
              onClick={() => {
                if (!genre.includes("Fiction")) setGenre([...genre, "Fiction"]);
              }}
            >
              <p className="genre">Fiction</p>
              <img src="fiction.png" alt="" className="fiction-img" />
            </div>
          </div>

          <div className="msgAndButton">
            <p className="error-msg">{status}</p>
            <button className="nextPage" onClick={() => onClick()}>Next Page</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
