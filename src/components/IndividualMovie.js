import React, { Component } from 'react'
import '../styles/IndividualMovie.scss'
import { cleanIndividualMovieData } from '../utils.js'
import IndividualMovieDetails from './IndividualMovieDetails'
import FourOhFour from './FourOhFour'
import getData from '../apiCalls'

class IndividualMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSingleMovie: false,
      movie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    getData(`movies/${this.props.urlId}`)
      .then(data => {
        this.setState({ isSingleMovie: true, movie: cleanIndividualMovieData(data.movie) })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }



  render() {
    const modalForDisplay = this.state.error ? <FourOhFour/> : <IndividualMovieDetails movie={this.state.movie}/>

    return(
      <section>
        {modalForDisplay}
      </section>
    )
  }
}

export default IndividualMovie