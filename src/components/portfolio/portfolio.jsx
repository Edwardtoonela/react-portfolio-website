import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio2.png'

const data = [

  {
    id: 1,
    image: IMG2,
    title: 'Travel Tribe',
    description: 'Travel Tribe was created in 2 weeks as our Lewagon final project. On the website, you will find many features such as an API-connected map, chatrooms, reviews, bookmarks, bookings, and an intuitive trip creator.',
    github: 'https://github.com/Edwardtoonela/travel-tribe',
    demo: 'http://www.trvltribe.com/'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Trippy Boats (Airbnb clone)',
    description: "Trippy Boats is an Airbnb clone built in 1 week as our first team project at Le Wagon. The project's main purpose was learning the MVC design pattern.",
    github: 'https://github.com/dancosta-fed/trippy-boats',
    demo: 'https://trippy-boats.herokuapp.com/'
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="#" />
          </div>
          <h3>This portfolio website</h3>
          <p>After the bootcamp I have focused on learning Javascript, hence this website is built on the React framework! Learning from previous projects I started building responsively from the very beginning.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Edwardtoonela/react-portfolio-website" className="btn" target='_blank'>Github</a>
          </div>
        </article>
      {
        data.map(({id, image, title, description, github, demo}) => {
          return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn" target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
