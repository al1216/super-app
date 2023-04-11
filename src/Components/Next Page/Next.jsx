import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Next() {
    let navigate = useNavigate();
  return (
    <>
    <div>Next Page</div>
    <button onClick={() => navigate('/category')}>Back to category</button>
    </>
  )
}