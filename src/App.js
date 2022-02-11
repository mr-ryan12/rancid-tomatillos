import React, { Component } from 'react'
import Movies from './components/Movies'
import IndividualMovie from './components/IndividualMovie'
import ErrorModal from './components/ErrorModal'
import { cleanAllMoviesData } from './utils'
import { getAllMovies } from './apiCalls'
import './styles/App.scss'
import { Route } from 'react-router-dom'
import Trailer from './components/Trailer'

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
    getAllMovies()
      .then(data => {
        this.setState({ movies: cleanAllMoviesData(data.movies) })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  displayHomePage = () => {
    this.setState({ isSingleMovie: false })
  }

  findMovie = match => {
    const foundMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
          
    if (foundMovie) {
        return <IndividualMovie movie={this.state.movie} displayHomePage={this.displayHomePage} urlId={match.params.id}/>
      } else {
        return <ErrorModal message="You entered in something incorrectly" displayHomePage={this.displayHomePage}/>
      }
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error} displayHomePage={this.displayHomePage}/> : null

    return (
      <main className="main-container">
        <h1 className='text-flicker-in-glow'>Rotten Tomatillos</h1>
        <h2 className="text-focus-in">Where your imagination comes to life on the big screen</h2>
        <Route exact path='/' render={() => <Movies movies={this.state.movies}  />}/>
        <Route exact path='/:id/' render={({match}) => this.findMovie(match)}/>
        <Route exact path='/:id/trailer' render={() => <Trailer />}/>
        {errorModal}
        {/* <Route path='/:id' render={() => errorModal}/> */}
      </main>
    )
  }
}

export default App;
