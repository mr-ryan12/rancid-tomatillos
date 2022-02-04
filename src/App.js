import React, { Component } from 'react'
import Movies from './components/Movies'
import movieData from './moviesData';
import IndividualMovie from './components/IndividualMovie'
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData,
      isSingleMovie: false,
      movie: ''
    }
  }

  displayIndividualMovie = id => {
    if (id) {
      this.setState({
        isSingleMovie: true,
        movie: 
          {
            id: 1,
            title: "Fake Movie Title",
            poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
            release_date: "2019-12-04",
            overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
            average_rating: 6,
            genres: ["Drama"],
            budget:63000000,
            revenue:100853753,
            runtime:139,
            tagline: "It's a movie!"
          }
        })
    }
  }

  render() {
    return (
      <main className="main-container">
        <h1>Rotten Tomatillos</h1>
        <h2 className="opening-line">Where your imagination comes to life on the big screen</h2>
        {!this.state.isSingleMovie ? <Movies movies={this.state.movies} findMovie={this.displayIndividualMovie}/> : <IndividualMovie movie={this.state.movie} />}
      </main>
    )
  }
}

export default App;
