import React from 'react'
import '../styles/IndividualMovie.scss'

const IndividualMovie = props => {
  const splitDate = props.movie.release_date.split('-')
  let [year, month, day] = splitDate

  const overviewDisplay = props.movie.overview === '' ? 
      <p>
        No overview available for this movie at this time! Please submit your version of the movie overview 
        <a href="http://www.turing.edu/contact" target="_blank">here</a>
      </p> 
      : props.movie.overview
  const budgetFormat = props.movie.budget === 0 ? 'N/A' : `$${Intl.NumberFormat('en-US').format(props.movie.budget)}`
  const revenueFormat = props.movie.revenue === 0 ? 'N/A' : `$${Intl.NumberFormat('en-US').format(props.movie.revenue)}`
  const genresFormat = props.movie.genres.length === 0 ? 'It\'s a mystery...' : props.movie.genres.join(', ')
  const runtimeFormat = props.movie.runtime === 0 ? 'N/A' : `${props.movie.runtime} minutes`

  return (
    <section className="individual-movie-container">
      <section className="movie-info">
        <section className="movie-header-container">
          <h2 className="movie-title">{props.movie.title}</h2>
          <h3 className="movie-tagline">{props.movie.tagline}</h3>
        </section>
          <p className="movie-overview"><span className="bold">Overview:</span>{overviewDisplay}</p>
        <section className="movie-details">
          <section className="movie-details-subcontainer">
            <p><span className="bold">Budget:</span> {budgetFormat}</p>
            <p><span className="bold">Genre:</span> {genresFormat}</p>
            <p><span className="bold">Runtime:</span> {runtimeFormat}</p>
          </section>
          <section className="movie-details-subcontainer">
            <p><span className="bold">Revenue:</span> {revenueFormat}</p>
            <p><span className="bold">Rating:</span> {props.movie.average_rating.toFixed(2)}</p>
            <p><span className="bold">Release Date:</span> {[month, day, year].join('-')}</p>
          </section>
        </section>
          <button className="home-button" onClick={() => props.displayHomePage()}>Home</button>
      </section>
      <img src={props.movie.backdrop_path} alt={`Poster for ${props.movie.title}`}/>
    </section>
  )
}

export default IndividualMovie