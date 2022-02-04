import React from 'react'
import '../styles/MovieCard.scss'

// key={movie.id}
// id={movie.id}
// posterImg={movie.poster_path}
// backdropImg={movie.backdrop_path}
// title={movie.title}
// averageRating={movie.average_rating}
// releaseDate={movie.release_date}

const MovieCard = props => {
  console.log(props)
  return (
    <section className="movie-card">
      <img src={props.posterImg} alt={`Movie Poster for ${props.title}`} />
      <h3>{props.title}</h3>
      <h4>Release Date: {props.releaseDate}</h4>
      <h4>Rating: {props.averageRating.toFixed(2)}</h4>
    </section>
  )
}

export default MovieCard