import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'


function Card({ data }) {
  const navigate = useNavigate();
  const handleinfo=()=>{
    localStorage.setItem('info', JSON.stringify(data))
    navigate('./info')
  }
  return (
    <div className="card">
        <img src={data.sprites.other.dream_world.front_default} alt="loading" onClick={handleinfo}/>
        <h3 className="name" onClick={handleinfo}>{data.name}</h3>
    </div>
  )
}

export default Card