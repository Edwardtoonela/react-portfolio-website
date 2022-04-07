import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id="services">
      <h5>It's not just programming</h5>
      <h2>Previous experiences</h2>

    {/* ------------ UI/UX Design ------------ */}

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design in Figma</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Prototyping</p>
            </li>
          </ul>
        </article>

    {/* ------------ Marketing ------------ */}

        <article className="service">
          <div className="service__head">
            <h3> Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Socialmedia marketing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Basic SEO</p>
            </li>
          </ul>
        </article>

    {/* ------------ Content Creation ------------ */}

        <article className="service">
          <div className="service__head">
            <h3> Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Commercial clips editing for small businesses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Podcast audio and video editing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
