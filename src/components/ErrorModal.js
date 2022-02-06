import React from 'react'
import '../styles/ErrorModal.scss'

const ErrorModal = props => {
  return (
    <section className="error-modal">
      <section className="error-modal-box">
        <h2 className="error-message">{props.message}</h2>
        <button className="refresh-button" onClick={() => window.location.reload()}>Refresh</button>
      </section>
    </section>
  )
}

export default ErrorModal