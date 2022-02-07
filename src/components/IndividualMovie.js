import React from 'react'
import '../styles/IndividualMovie.scss'

const IndividualMovie = props => {
  const overviewDisplay = props.movie.overview === '' ? 
      <>
        No overview available for this movie at this time! Please submit your version of the movie overview <a href="http://www.turing.edu/contact" target="_blank">here</a>
      </> 
      : props.movie.overview

  const budgetFormat = props.movie.budget === 0 ? 'N/A' : `$${Intl.NumberFormat('en-US').format(props.movie.budget)}`
  const revenueFormat = props.movie.revenue === 0 ? 'N/A' : `$${Intl.NumberFormat('en-US').format(props.movie.revenue)}`
  const genresFormat = props.movie.genres.length === 0 ? 'It\'s a mystery...' : props.movie.genres.join(', ')
  const runtimeFormat = props.movie.runtime === 0 ? 'N/A' : `${props.movie.runtime} minutes`
  const ratingFormat = props.movie.average_rating.toFixed(2)
  
  const splitDate = props.movie.release_date.split('-')
  let [year, month, day] = splitDate
  const releaseDateFormat = [month, day, year].join('-')
  const backdropDisplay = props.movie.backdrop_path.includes('NoPhotoAvailable') ? props.movie.poster_path : props.movie.backdrop_path

  return (
    <section className="individual-movie-container">
      <section className="movie-info">
        <section className="movie-header-container">
          <h2 className="movie-title">{props.movie.title}</h2>
          <h3 className="movie-tagline">{props.movie.tagline}</h3>
        </section>
          <p className="movie-overview"><span className="bold">Overview: </span>{overviewDisplay}</p>
        <section className="movie-details">
          <section className="movie-details-subcontainer">
            <p><span className="bold">Budget:</span> {budgetFormat}</p>
            <p><span className="bold">Genre:</span> {genresFormat}</p>
            <p><span className="bold">Runtime:</span> {runtimeFormat}</p>
          </section>
          <section className="movie-details-subcontainer">
            <p><span className="bold">Revenue:</span> {revenueFormat}</p>
            <p><span className="bold">Rating:</span> {ratingFormat}</p>
            <p><span className="bold">Release Date:</span> {releaseDateFormat}</p>
          </section>
        </section>
          <button className="home-button" onClick={() => props.displayHomePage()}>Home</button>
      </section>
      <div className="image-container"> 
        <img src={backdropDisplay} alt={`Poster for ${props.movie.title}`}/>
      </div>
    </section>
  )
}

export default IndividualMovie