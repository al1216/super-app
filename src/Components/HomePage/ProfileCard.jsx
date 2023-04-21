import React from 'react'
import './ProfileCard.css'
export default function ProfileCard() {
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  let genres = JSON.parse(localStorage.getItem("categoriesOfUsers"));

  return (
    <div className="profile-card">
        <div className="avatar">
          <img src="avatar.png" alt="" className="avatar" />
        </div>
        <div className="userAndGenre">
          <div className="user">
            <h2 className="name-profile">{userDetails != null && userDetails[0]}</h2>
            <h2 className="email-profile">{userDetails != null && userDetails[2]}</h2>
            <h1 className="username-profile">{userDetails != null && userDetails[1]}</h1>
          </div>
          <div className="genre-home">
            {genres != null && genres.map((option) => (
              <>
                <div className="show-genre-home">
                  <p className="option-home" key={option}>
                    {option}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
  )
}
