import React from 'react'
import '../styles/Video.scss'

const Video = props => {
  return (
    <iframe
      className="video"
      width="853"
      height="480"
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  )
}

export default Video