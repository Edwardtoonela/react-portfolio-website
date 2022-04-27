import React from 'react'
import './about.css'
import ME from '../../assets/comp2.png'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {BiPodcast} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 3 Websites launched to production, more to come!</small>
            </article>
            <article className='about__card'>
              <BiPodcast className='about__icon'/>
              <h5>Podcaster</h5>
              <small> I like talking about topics beyond boring old gossip </small>
            </article>
            <article className='about__card'>
              <BsMusicNoteBeamed className='about__icon'/>
              <h5>DJ</h5>
              <small> Music has been my pasttime both energizing and calming for 2 years </small>
            </article>
          </div>

          <p>
          I am a dreamer, minimalist, tech enthusiast, start upper- a rebel and a pirate.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
