import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/catherina-el-khoury-73710123a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrwUQ7KzeSamv%2BqwtmRYEAA%3D%3D" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials