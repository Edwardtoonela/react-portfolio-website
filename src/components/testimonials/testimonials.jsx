import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/comp2.png'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
