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
    avatar: AVTR2,
    name: 'Milene Cardoso',
    review: `Edward was one of my students at Le Wagon Rio Coding Bootcamp. He was a very dedicated and involved student - always participating in all the events we were hosting with professionals from the industry!

    As part of our coding bootcamp, our students get the opportunity to pitch their web app idea and compete to get selected as a final project to be developed at Le Wagon. Edward was one of the winner of this competition and successfully developed a travel app with his team in only 10 days.

    Edward has a lot of potential - I can’t wait to see him succeed in the tech industry!`
  },
  {
    avatar: AVTR3,
    name: 'Carla Valdivia',
    review: `It is my pleasure to recommend Edward Toonela for a position as web developer.

    During #822 batch, Edward displayed great talents in technical applications such as Ruby, SQL, Ruby on Rails, HTML, CSS, Javascript and Figma.

    I truly believe he’ll be a great addition to any company looking for a developer.`
  },
  {
    avatar: AVTR4,
    name: 'Daniel Costa',
    review: `I met Ed at Le Wagon Rio, we've done a Full Stack Rails Development Bootcamp together.

    And at the end of the course, we worked together for the two final projects we had. One of which, was Ed's idea (Travel Tribe). I was happy and lucky to work with him.

    He's very driven and easy to work with. Has a good mindset, creative and smart when it comes to programming logic. Whatever he set himself to do, he did it really well.

    I'd be happy to work with people like Ed.`
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
