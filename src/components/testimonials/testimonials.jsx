import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/comp2.png'

const data = [
  {
    avatar: AVTR,
    name: 'John Doe',
    review: 'He is so nice bla bla bla'
  },
  {
    avatar: AVTR,
    name: 'John Doe',
    review: 'Hdkas asd asd öasfdölasd l'
  },
  {
    avatar: AVTR,
    name: 'John Doe',
    review: 'He is so nice bla bla bla'
  },
  {
    avatar: AVTR,
    name: 'John Doe',
    review: 'He is so nice bla bla bla'
  },
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients and coworkers</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
