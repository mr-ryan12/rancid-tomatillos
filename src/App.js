import React, { Component } from 'react'
import Movies from './components/Movies'
import movieData from './moviesData'
import IndividualMovie from './components/IndividualMovie'
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isSingleMovie: false,
      movie: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
  }

  displayIndividualMovie = id => {
    if (id) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ isSingleMovie: true, movie: data.movie })
        })
    }
  }

  displayHomePage = () => {
    this.setState({ isSingleMovie: false })
  }

  render() {
    return (
      <main className="main-container">
        <h1>Rotten Tomatillos</h1>
        <h2 className="opening-line">Where your imagination comes to life on the big screen</h2>
        {!this.state.isSingleMovie ? <Movies movies={this.state.movies} findMovie={this.displayIndividualMovie} /> : <IndividualMovie movie={this.state.movie} displayHomePage={this.displayHomePage}/>}
      </main>
    )
  }
}

export default App;
