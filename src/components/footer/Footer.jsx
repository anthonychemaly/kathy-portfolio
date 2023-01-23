import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {SiInstagram} from "react-icons/si"
import {FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer-section'>
      <a href="#" className='footer_logo'>KT</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100004905614364" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/kathyelkhoury/" target="_blank"><SiInstagram /></a>
        <a href="https://twitter.com/kathyelkhoury" target="_blank"><FaTwitter /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer