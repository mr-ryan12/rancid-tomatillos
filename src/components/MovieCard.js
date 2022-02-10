import React from 'react'
import '../styles/MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  return (
    <section className="movie-card" tabIndex={0}>
      <Link to={`/${props.id}`} >
        <img src={props.posterImg} alt={`Movie Poster for ${props.title}`} className='movie-image' onClick={() => props.findMovie(props.id)}/>
      </Link>
      <h2 className="poster-movie-title">{props.title}</h2>
      <h3 className="poster-release-date"><span className='bolder'>Release Date: </span>{props.releaseDate}</h3>
      <h3 className="poster-average-rating"><span className='bolder'>Rating: </span>{props.averageRating}</h3>
    </section>
  )
}

export default MovieCard  