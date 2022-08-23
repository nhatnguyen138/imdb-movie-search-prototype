import React from 'react'
import './style.css'

export default function MovieCard(props) {
  return (
    <div className='movie-card' key={props.index}>
      <img src={props.poster} />
      <p>{props.text}</p>
    </div>
  )
}
