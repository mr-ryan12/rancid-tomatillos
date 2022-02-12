import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTrailer } from '../apiCalls'
import Video from './Video'
import '../styles/Trailer.scss'

class Trailer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trailers: []
    }
  }

  componentDidMount = () => {
    getTrailer(this.props.movie.params.id)
      .then(data => {
        this.setState({
          trailers: data.videos
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
    return (
      <section className="trailer-container">
        {allTrailers}
        <Link to='/' className="trailer-button">Home</Link>
        <Link to={`/${this.props.movie.params.id}`} className="trailer-button">Back to Movie Details</Link>
      </section>
    )
  }
}

export default Trailer