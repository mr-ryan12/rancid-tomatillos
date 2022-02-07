import React from 'react'
import '../styles/MovieCard.scss'

const MovieCard = props => {
  const splitDate = props.releaseDate.split('-')
  let [year, month, day] = splitDate
  const releaseDateFormat2 = [month, day, year].join('-')

  const ratingFormat2 = props.averageRating.toFixed(2)

  return (
    <section className="movie-card" tabIndex={0}>
      <img src={props.posterImg} alt={`Movie Poster for ${props.title}`} onClick={() => props.findMovie(props.id)}/>
      <h2>{props.title}</h2>
      <h3><span className='bolder'>Release Date: </span>{releaseDateFormat2}</h3>
      <h3><span className='bolder'>Rating: </span>{ratingFormat2}</h3>
    </section>
  )
}

export default MovieCard  