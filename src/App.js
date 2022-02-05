import React, { Component } from 'react'
import Movies from './components/Movies'
import IndividualMovie from './components/IndividualMovie'
import ErrorModal from './components/ErrorModal'
import './styles/App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isSingleMovie: false,
      movie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies1213')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong. Please refresh the page or try again later.')
        }
      })
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  displayIndividualMovie = id => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong. Please refresh the page or try again later.')
        }
      })
      .then(data => {
        this.setState({ isSingleMovie: true, movie: data.movie })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  displayHomePage = () => {
    this.setState({ isSingleMovie: false })
  }

  render() {
    return (
      <main className="main-container">
        <h1>Rotten Tomatillos</h1>
        <h2 className="opening-line">Where your imagination comes to life on the big screen</h2>
        {this.state.error ? <ErrorModal message={this.state.error} displayHomePage={this.displayHomePage}/> : null}
        {!this.state.isSingleMovie ? <Movies movies={this.state.movies} findMovie={this.displayIndividualMovie} /> : <IndividualMovie movie={this.state.movie} displayHomePage={this.displayHomePage}/>}
      </main>
    )
  }
}

export default App;
