import React from 'react'
import '../styles/MovieCard.scss'

const MovieCard = props => {
  const splitDate = props.releaseDate.split('-')
  let [year, month, day] = splitDate

  return (
    <section className="movie-card" tabIndex={0}>
      <img src={props.posterImg} alt={`Movie Poster for ${props.title}`} onClick={() => props.findMovie(props.id)}/>
      <h2>{props.title}</h2>
      <h3><span className='bold'>Release Date: </span>{[month, day, year].join('-')}</h3>
      <h3><span className='bold'>Rating: </span>{props.averageRating.toFixed(2)}</h3>
    </section>
  )
}

export default MovieCard  