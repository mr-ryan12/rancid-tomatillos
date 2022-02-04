import React from 'react'
import MovieCard from './MovieCard'
import '../styles/Movies.scss'

const Movies = props => {
  // const standardizeDates = props.movies.movies.filter(movie => {
  //   const splitDate = movie.release_date.split('-')
  //   let [year, month, day] = splitDate

  //   movie.release_date = [month, day, year].join('-')
    
  //   return movie.release_date
  // })
  const sortedMovies = props.movies.movies.sort((a, b) => (a.release_date < b.release_date) - (a.release_date > b.release_date))
  const allMovieCards = sortedMovies.map(movie => {
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