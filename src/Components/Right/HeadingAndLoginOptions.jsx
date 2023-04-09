import React from 'react';
import './HeadingAndLoginOptions.css';

function HeadingAndLoginOptions() {
  return (
    <>
    <h1 className="heading">Super app</h1>
      <div className="login-options">
        <p className="content-right">Create your new account</p>
        <div className="options">
          <p className="emailLogin">Email</p>
          <p className="slash">|</p>
          <p className="googleLogin">Google</p>
        </div>
      </div>
    </>
  )
}

export default HeadingAndLoginOptions;