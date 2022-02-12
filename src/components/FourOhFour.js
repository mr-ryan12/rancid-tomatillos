import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FourOhFour.scss'

const FourOhFour = () => {
  return (
    <section className="message-container">
      <h2>404 Error: Page not found</h2>
      <p className="four-oh-four-message">So sorry, that URL does not exist</p>
      <iframe src="https://giphy.com/embed/Zf9oMBBf3eRTW" className="four-oh-four-gif" allowFullScreen />
      <Link to='/' className="four-oh-four-home-button">Back to Home</Link>
    </section>
  )
}

export default FourOhFour