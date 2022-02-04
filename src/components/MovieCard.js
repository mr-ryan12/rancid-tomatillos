import React from 'react'
import '../styles/MovieCard.scss'

const MovieCard = props => {
  return (
    <section className="movie-card" tabIndex={0}>
      <img src={props.posterImg} alt={`Movie Poster for ${props.title}`}/>
      <h2>{props.title}</h2>
      <h3>Release Date: {props.releaseDate}</h3>
      <h3>Rating: {props.averageRating.toFixed(2)}</h3>
    </section>
  )
}

export default MovieCard