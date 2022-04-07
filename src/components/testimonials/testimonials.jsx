import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/comp2.png'

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients and coworkers</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            He is so nice bla bla bla
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            He is so nice bla bla bla
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            He is so nice bla bla bla
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
