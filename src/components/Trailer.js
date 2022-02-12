import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTrailer } from '../apiCalls'
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
        <iframe
          key={trailer.id}
          width="853"
          height="480"
          src={this.findVideoSource(trailer)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      )
    })
    return (
      <section className="trailer-container">
        {allTrailers}
        <Link to='/' className="trailer-button">Home</Link>
        <Link to={`/${this.props.movie.params.id}`} className="trailer-button">Movie Details</Link>
      </section>
    )
  }
}

export default Trailer