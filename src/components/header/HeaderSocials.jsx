import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/edward-toonela/" target="_blank"> <BsLinkedin /> </a>
      <a href="https://www.github.com" target="_blank"> <BsGithub /> </a>
      <a href="https://www.youtube.com" target="_blank"> <BsYoutube /> </a>
    </div>
  )
}

export default HeaderSocials
