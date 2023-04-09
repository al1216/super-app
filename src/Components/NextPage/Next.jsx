import React from 'react';
import { useNavigate } from "react-router-dom";

function Next() {
  let navigate = useNavigate();
  return (
    <>
    <h1>Congratulations</h1>
    <button onClick={() => {navigate("/")}} >Back to Home</button>
    </>
  )
}

export default Next;