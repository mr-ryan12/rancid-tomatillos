import React, { Component } from 'react'
import movieData from './moviesData';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main>
        <h1 className="App">Rotten Tomatillos</h1>
        <Movies movie={this.state.movies} />
      </main>
    )
  }
}

export default App;
