import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>toonelaedward@gmail.com</h5>
              <a href='mailto:toonelaedward@gmail.com' target="_blank">Send an email</a>
            </article>
          </div>
          <div className="contact__options">
            <article className="contact__option">
              <RiMessengerLine />
              <h4>Messenger</h4>
              <h5>@EdwardToonela</h5>
              <a href='https://m.me/edward.toonela/' target="_blank">Send a message</a>
            </article>
          </div>
          <div className="contact__options">
            <article className="contact__option">
              <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+3725084335</h5>
              <a href='https://api.whatsapp.com/send?phone=+3725084335' target="_blank">Send a message</a>
            </article>
          </div>

        {/* END OF CONTACT OPTIONS */}

        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
