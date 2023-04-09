import React from 'react'
import './Left.css';

function Left() {
  return (
    <div className="left">
            <div className="image">
                <img src="left-banner.png" alt="" />
            </div>
            <div className="loginAndcontent">
                <div className="login">
                    <p className="content">Already have an account?</p>
                    <button className="login-btn">LOGIN</button>
                </div>
                <h1 className="caption">Discover new things on Superapp</h1>
            </div>
        </div>
  )
}

export default Left;