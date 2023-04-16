import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [mobileNumber, setMobileNumber] = useState(0);
  let [checkbox, setCheckbox] = useState(false);
  let [warning1, setWarning1] = useState(false);
  let [warning2, setWarning2] = useState(false);
  let [warning3, setWarning3] = useState(false);
  let [warning4, setWarning4] = useState(false);
  let [warning5, setWarning5] = useState(false);


  let status = [];
  let msg = [
    "Name can't be empty", 
    "UserName can't be empty",
    "Enter valid Email",
    "Enter valid 10 digit mobile number",
    "Please tick the checkbox"
  ]
  let navigate = useNavigate()

  let onClick = () => {
    
    if (name.trim().length < 1){
      status[0] = false;
    }

    if (name.trim().length >=  1) status[0] = true;

    if (username.trim().length < 1) status[1] = false;

    if (username.trim().length >= 1) status[1] = true;

    if (isValidEmail(email) === false) status[2] = false;

    if (isValidEmail(email) === true) status[2] = true;

    if (isValidNumber(mobileNumber) === false) status[3] = false;

    if (isValidNumber(mobileNumber) === true) status[3] = true;

    if (checkbox === false) status[4] = false;

    if (checkbox === true) status[4] = true;

    if (name.trim().length >= 1 && username.trim().length >= 1 && 
    checkbox === true && isValidNumber(mobileNumber) && isValidEmail(email)){
      let userDetails = [name,username,email,mobileNumber];
      if (!localStorage.getItem("userDetails")){
        localStorage.setItem("userDetails",JSON.stringify(userDetails));
      }
      else{
        localStorage.setItem("userDetails",JSON.stringify(userDetails));
      }
      
      
      navigate(`/category`);
      
    }
    else{
      if (name.trim().length < 1) setWarning1(true);
      if (username.trim().length < 1) setWarning2(true);
      if (isValidEmail(email) === false) setWarning3(true);
      if (isValidNumber(mobileNumber) === false) setWarning4(true);
      if (checkbox === false) setWarning5(true);

    }

    console.log(status);
  }

  let isValidNumber = (num) => {
    let len = Math.ceil(Math.log10(num + 1))-1;

    if (len === 10) return true;
    else return false;
  }

  let isValidEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    // eslint-disable-line
    if ( re.test(email) ) {
        return true;
    }
    
    return false;
  }

  return (
    <div className="form">
      <input
        type="text"
        className="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {warning1 && <p className="warning1">{msg[0]}</p>}
      <input
        type="text"
        className="username"
        placeholder="UserName"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {warning2 && <p className="warning2">{msg[1]}</p>}
      <input
        type="email"
        className="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {warning3 && <p className="warning3">{msg[2]}</p>}
      <input
        type="text"
        className="mobileNumber"
        placeholder="Mobile"
        onChange={(e) => {
          setMobileNumber(e.target.value);
        }}
      />
      {warning4 && <p className="warning4">{msg[3]}</p>}
      <div className="checkAndCondtions">
        <input
          type="checkbox"
          name=""
          id=""
          className="checkbox"
          onChange={(e) => {
            setCheckbox(e.target.checked);
          }}
        />
        <p className="acceptCondtions">
          Share my registration data with Superapp
        </p>
      </div>
      {warning5 && <p className="warning5">{msg[4]}</p>}
      <button className="btn-sign-up" onClick={onClick}>SIGN UP</button>
    </div>
  );
}
