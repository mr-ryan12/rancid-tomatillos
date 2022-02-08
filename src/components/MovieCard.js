import React from 'react'
import '../styles/MovieCard.scss'

const MovieCard = props => {
  return (
    <section className="movie-card" tabIndex={0}>
      <img src={props.posterImg} alt={`Movie Poster for ${props.title}`} onClick={() => props.findMovie(props.id)}/>
      <h2 className="poster-movie-title">{props.title}</h2>
      <h3 className="poster-release-date"><span className='bolder'>Release Date: </span>{props.releaseDate}</h3>
      <h3 className="poster-average-rating"><span className='bolder'>Rating: </span>{props.averageRating}</h3>
    </section>
  )
}

export default MovieCard  