import React, { Component } from 'react'
import Movies from './components/Movies'
import movieData from './moviesData';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main className="main-container">
        <h1>Rotten Tomatillos</h1>
        <h2 className="opening-line">Where your imagination comes to life on the big screen</h2>
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
