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
  return (
    <section className="individual-movie-container">
      <section className="movie-info">
        <h2>{props.movie.title}</h2>
        <h3>{props.movie.tagline}</h3>
        <p>Overview: {props.movie.overview}</p>
        <section className="movie-details">
          <section>
            <p>Budget: {props.movie.budget}</p>
            <p>Genre: {props.movie.genres}</p>
            <p>Runtime: {props.movie.runtime} minutes</p>
          </section>
          <section>
            <p>Revenue: {props.movie.revenue}</p>
            <p>Rating: {props.movie.average_rating}</p>
            <p>Release Date: {props.movie.release_date}</p>
          </section>
        </section>

      </section>
      <img src={props.movie.backdrop_path} alt={`Poster for ${props.movie.title}`}/>
    </section>
  )
}

export default IndividualMovie