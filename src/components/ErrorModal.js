import React from 'react'
import '../styles/ErrorModal.scss'
import '../styles/IndividualMovie.scss'

import { Link } from 'react-router-dom'

const ErrorModal = props => {
  return (
    <section className="error-modal">
      <section className="error-modal-box">
        <h2 className="error-message">{props.message}</h2>
        <Link to='/' className="home-button">Home</Link>
      </section>
    </section>
  )
}

export default ErrorModal