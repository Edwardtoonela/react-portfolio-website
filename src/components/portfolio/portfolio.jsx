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
    github: 'https://github.com/Edwardtoonela/travel-tribe',
    demo: 'http://www.trvltribe.com/'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Trippy Boats (Airbnb clone)',
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
          <div className="portfolio__item-cta">
            <a href="https://github.com/Edwardtoonela/react-portfolio-website" className="btn" target='_blank'>Github</a>
          </div>
        </article>
      {
        data.map(({id, image, title, github, demo}) => {
          return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
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
