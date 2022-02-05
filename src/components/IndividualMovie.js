import React from 'react'
import '../styles/IndividualMovie.scss'

// id: 1,
// title: "Fake Movie Title",
// poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
// backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
// release_date: "2019-12-04",
// overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
// average_rating: 6,
// genres: ["Drama"],
// budget:63000000,
// revenue:100853753,
// runtime:139,
// tagline: "It's a movie!"

const IndividualMovie = props => {
  console.log(props)
  const splitDate = props.movie.release_date.split('-')
  let [year, month, day] = splitDate

  return (
    <section className="individual-movie-container">
      <section className="movie-info">
        <section className="movie-header-container">
          <h2 className="movie-title">{props.movie.title}</h2>
          <h3 className="movie-tagline">{props.movie.tagline}</h3>
        </section>
          <p className="movie-overview"><span className="bold">Overview:</span> {props.movie.overview}</p>

        <section className="movie-details">
          <section className="movie-details-subcontainer">
            <p><span className="bold">Budget:</span> {`$${Intl.NumberFormat('en-US').format(props.movie.budget)}`}</p>
            <p><span className="bold">Genre:</span> {props.movie.genres.join(', ')}</p>
            <p><span className="bold">Runtime:</span> {props.movie.runtime} minutes</p>
          </section>
          <section className="movie-details-subcontainer">
            <p><span className="bold">Revenue:</span> {`$${Intl.NumberFormat('en-US').format(props.movie.revenue)}`}</p>
            <p><span className="bold">Rating:</span> {props.movie.average_rating}</p>
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