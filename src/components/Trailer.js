import React from 'react'
import '../styles/Trailer.scss'

const Trailer = () => {
  return (
    <section>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/cU5875rHQ8k`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
    </section>
  )
}

export default Trailer