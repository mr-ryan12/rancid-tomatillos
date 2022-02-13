import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'
import '../styles/Trailer.scss'
import { cleanTrailerData } from '../utils'
import getData from '../apiCalls'

class Trailer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trailers: []
    }
  }

  componentDidMount = () => {
    getData(`movies/${this.props.movie.params.id}/videos`)
      .then(data => {
        this.setState({
          trailers: cleanTrailerData(data.videos)
        })
      })
      .catch(error => console.log(error))
  }

  findVideoSource = trailer => {
    if (trailer.site === 'Vimeo') {
      return `https://player.vimeo.com/video/${trailer.key}`
    } else if (trailer.site === 'YouTube') {
      return `http://www.youtube.com/embed/${trailer.key}`
    }
    return null
  }

  render() {
    const catGif = <div className="gif-container">
                      <p>Sorry, no trailers available for this movie at this time.</p>
                      <iframe src="https://giphy.com/embed/qpCvOBBmBkble" className="cat-gif" allowFullScreen/>
                    </div>
    const allTrailers = this.state.trailers.map(trailer => {
      return (
        <Video 
          key={trailer.id}
          id={trailer.id}
          movieId={trailer.movie_id}
          src={this.findVideoSource(trailer)}
          site={trailer.site}
          type={trailer.type}
        />
      )
    })
    const checkTrailers = allTrailers.length === 0 ? catGif : allTrailers
    return (
      <section className="trailer-container">
        {checkTrailers}
        <Link to='/' className="back-home-button trailer-button">Home</Link>
        <Link to={`/${this.props.movie.params.id}`} className="back-to-movie-button trailer-button">Back to Movie Details</Link>
      </section>
    )
  }
}

export default Trailer