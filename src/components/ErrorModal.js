import React from 'react'
import '../styles/ErrorModal.scss'
import '../styles/IndividualMovie.scss'

const ErrorModal = props => {
  return (
    <section className="error-modal">
      <section className="error-modal-box">
        <h2 className="error-message">{props.message}</h2>
      </section>
    </section>
  )
}

export default ErrorModal