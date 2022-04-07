import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EDWARD TOONELA</a>

      <ul className='permalinks'>
        <li> <a href="#">home</a> </li>
        <li> <a href="#about">about</a> </li>
        <li> <a href="#experience">experience</a> </li>
        <li> <a href="#services">services</a> </li>
        <li> <a href="#portfolio">portfolio</a> </li>
        <li> <a href="#testimonials">testimonials</a> </li>
        <li> <a href="#contact">contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/edward-toonela/"> < BsLinkedin /> </a>
        <a href="https://www.facebook.com/edward.toonela/"> < BsFacebook /> </a>
        <a href="https://www.instagram.com/edwardtoonela/"> < BsInstagram /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Edward Toonela. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
