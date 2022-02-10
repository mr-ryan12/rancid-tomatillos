import React, { Component } from 'react'
import Movies from './components/Movies'
import IndividualMovie from './components/IndividualMovie'
import ErrorModal from './components/ErrorModal'
import { cleanAllMoviesData, cleanIndividualMovieData } from './utils'
import { getAllMovies, getIndividualMovie } from './apiCalls'
import './styles/App.scss'
import { Route } from 'react-router-dom'

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

  displayIndividualMovie = id => {
    getIndividualMovie(id)
      .then(data => {
        this.setState({ isSingleMovie: true, movie: cleanIndividualMovieData(data.movie) })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  displayHomePage = () => {
    this.setState({ isSingleMovie: false })
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error} displayHomePage={this.displayHomePage}/> : null
    const displayMovie = !this.state.isSingleMovie ? <Movies movies={this.state.movies} findMovie={this.displayIndividualMovie} /> : <IndividualMovie movie={this.state.movie} displayHomePage={this.displayHomePage}/>

    return (
      <main className="main-container">
        <h1 className='text-flicker-in-glow'>Rotten Tomatillos</h1>
        <h2 className="text-focus-in">Where your imagination comes to life on the big screen</h2>
        <Route exact path='/' render={() => <Movies movies={this.state.movies} findMovie={this.displayIndividualMovie} />}/>
        <Route exact path='/:id' render={({match}) => {
          const foundMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
          
            if(foundMovie) {
              return <IndividualMovie movie={this.state.movie} displayHomePage={this.displayHomePage}/>
            } 
          } 
        }/>
        {errorModal}
        
      </main>
    )
  }
}

export default App;
