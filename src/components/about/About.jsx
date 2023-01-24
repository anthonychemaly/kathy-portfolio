import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id="about" className='about-section'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="me"/>
            </div>
       </div>

        <div className="about_content">
          <p>
              Third-year Computer Engineering student at USEK. I am looking forward to obtain a position that provides me with suitable opportunities to grow my technical skills which would help me as a fresher to grow.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About