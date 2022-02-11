import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Trailer.scss'

const Trailer = props => {
  console.log(props.movie.params.id)
  return (
    <section className="trailer-container">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/cU5875rHQ8k`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
    <Link to='/' className="trailer-button">Home</Link>
    <Link to={`/${props.movie.params.id}`} className="trailer-button">Movie Details</Link>
    </section>
  )
}

export default Trailer