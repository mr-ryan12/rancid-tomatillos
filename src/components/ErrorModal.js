import React from 'react'
import '../styles/ErrorModal.scss'

const ErrorModal = props => {
  return (
    <section className="error-modal">
      <section className="error-modal-box">
        <h2 className="error-message">{props.message}</h2>
        <button className="refresh-button" onClick={() => props.displayHomePage()}>Refresh</button>
      </section>
    </section>
  )
}

export default ErrorModal