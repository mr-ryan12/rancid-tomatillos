import React, { Component } from 'react'
import Movies from './components/Movies'
import IndividualMovie from './components/IndividualMovie'
import ErrorModal from './components/ErrorModal'
import { cleanAllMoviesData } from './utils'
import './styles/App.scss'
import { Route, Switch } from 'react-router-dom'
import Trailer from './components/Trailer'
import FourOhFour from './components/FourOhFour'
import getData from './apiCalls'

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
    getData('movies')
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

  // Error handling
  findMovie = (match, location) => {
    const foundMovie = this.state.movies.find(movie => {
      if (match.params.id.length === 6 && movie.id === parseInt(match.params.id)) {
        return movie
      }
    })

    if (foundMovie) {
      return <IndividualMovie movie={this.state.movie} displayHomePage={this.displayHomePage} urlId={match.params.id}/>
    } 
    if (this.state.error) {
      return <ErrorModal message={this.state.error} displayHomePage={this.displayHomePage}/>
    }
    if (!location.key) {
      return <FourOhFour />
    }

    return null
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error} displayHomePage={this.displayHomePage}/> : null

    return (
      <main className="main-container">
        <h1 className='text-flicker-in-glow'>Rancid Tomatillos</h1>
        <h2 className="text-focus-in">Where your imagination comes to life on the big screen</h2>
        <Switch>
          <Route exact path='/' render={() => <Movies movies={this.state.movies}  />}/>
          <Route exact path='/:id' render={({match, location}) => this.findMovie(match, location)}/>
          <Route exact path='/:id/trailer' render={({match}) => <Trailer movie={match}/>}/>
          <Route render={() => <FourOhFour />}/>
        </Switch>
        {errorModal}
      </main>
    )
  }
}

export default App;
