import React, { Component } from 'react'
import '../styles/IndividualMovie.scss'
import { getIndividualMovie } from '../apiCalls'
import { cleanIndividualMovieData } from '../utils.js'
import ErrorModal from './ErrorModal'
import { Link } from 'react-router-dom'
import testUtils from 'react-dom/test-utils'

// const IndividualMovie = props => {
//   // const overviewDisplay = props.movie.overview === '' ? 
//   //     <>
//   //       No overview available for this movie at this time! Please submit your version of the movie overview <a href="http://www.turing.edu/contact" target="_blank">here</a>
//   //     </> 
//   //     : props.movie.overview

//   return (
//     <section className="individual-movie-container">
//       <section className="movie-info">
//         <section className="movie-header-container">
//           <h2 className="movie-title">{props.movie.title}</h2>
//           <h3 className="movie-tagline">{props.movie.tagline}</h3>
//         </section>
//           <p className="movie-overview"><span className="bold">Overview: </span>{props.movie.overview}</p>
//         <section className="movie-details">
//           <section className="movie-details-subcontainer">
//             <p><span className="bold">Budget: </span> {props.movie.budget}</p>
//             <p><span className="bold">Genre: </span> {props.movie.genres}</p>
//             <p><span className="bold">Runtime: </span> {props.movie.runtime}</p>
//           </section>
//           <section className="movie-details-subcontainer">
//             <p><span className="bold">Revenue: </span> {props.movie.revenue}</p>
//             <p><span className="bold">Rating: </span> {props.movie.average_rating}</p>
//             <p><span className="bold">Release Date: </span> {props.movie.release_date}</p>
//           </section>
//         </section>
//           <Link to={'/'} className="home-button">Home</Link>
//       </section>
//       <div className="image-container"> 
//         <img src={props.movie.backdrop_path} alt={`Poster for ${props.movie.title}`}/>
//       </div>
//     </section>
//   )
// }

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
    getIndividualMovie(this.props.urlId)
    .then(data => {
      this.setState({ isSingleMovie: true, movie: cleanIndividualMovieData(data.movie) })
    })
    .catch(error => {
      this.setState({ error: error.message })
    })
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error} displayHomePage={this.displayHomePage}/> : null

    return(
      <section className="individual-movie-container">
        {/* {errorModal} */}
        <section className="movie-info">
          <section className="movie-header-container">
            <h2 className="movie-title">{this.state.movie.title}</h2>
            <h3 className="movie-tagline">{this.state.movie.tagline}</h3>
          </section>
            <p className="movie-overview"><span className="bold">Overview: </span>{this.state.movie.overview}</p>
          <section className="movie-details">
            <section className="movie-details-subcontainer">
              <p><span className="bold">Budget: </span> {this.state.movie.budget}</p>
              <p><span className="bold">Genre: </span> {this.state.movie.genres}</p>
              <p><span className="bold">Runtime: </span> {this.state.movie.runtime}</p>
            </section>
            <section className="movie-details-subcontainer">
              <p><span className="bold">Revenue: </span> {this.state.movie.revenue}</p>
              <p><span className="bold">Rating: </span> {this.state.movie.average_rating}</p>
              <p><span className="bold">Release Date: </span> {this.state.movie.release_date}</p>
            </section>
          </section>
            <Link to={'/'} className="home-button">Home</Link>
        </section>
        <div className="image-container"> 
          <img src={this.state.movie.backdrop_path} alt={`Poster for ${this.state.movie.title}`}/>
        </div>
      </section>
    )
  }
}

export default IndividualMovie