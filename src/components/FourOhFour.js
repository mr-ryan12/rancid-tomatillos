import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FourOhFour.scss'

const FourOhFour = () => {
  return (
    <section className="message-container">
      <h2>Oops!</h2>
      <p>So sorry, that doesn't exist</p>
      <Link to='/'>Back to Safety</Link>
    </section>
  )
}

export default FourOhFour