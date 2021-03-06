import React from 'react'
import MovieCard from './MovieCard'
import '../styles/Movies.scss'

const Movies = props => {
  const allMovieCards = props.movies.map(movie => {
    return (
      <MovieCard 
        key={movie.id}
        id={movie.id}
        posterImg={movie.poster_path}
        backdropImg={movie.backdrop_path}
        title={movie.title}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
      />
    )
  })
  return (
    <div className="movie-card-container">
      {allMovieCards}
    </div>
  )
}

export default Movies