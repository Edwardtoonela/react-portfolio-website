import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/andre.jpeg'
import AVTR2 from '../../assets/Milene.png'
import AVTR3 from '../../assets/carla.jpeg'
import AVTR4 from '../../assets/Dan.jpeg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'André Menezes',
    review: 'He is so nice bla bla bla'
  },
  {
    avatar: AVTR2,
    name: 'Milene Cardoso',
    review: 'Hdkas asd asd öasfdölasd l'
  },
  {
    avatar: AVTR3,
    name: 'Carla Valdivia',
    review: 'He is so nice bla bla bla'
  },
  {
    avatar: AVTR4,
    name: 'Daniel Costa',
    review: 'He is so nice bla bla bla'
  },
]

const Testimonials = () => {
  return (
    <section>
      <h5>What my friends and coworkers say</h5>
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
