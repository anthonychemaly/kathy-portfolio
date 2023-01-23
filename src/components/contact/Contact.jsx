import React from 'react'
import './contact.css'
import {HiOutlineMail} from "react-icons/hi"
import {SiInstagram} from "react-icons/si"
import {ImWhatsapp} from "react-icons/im"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofglnlb', 'template_nawfch7', form.current, 'R0o_0Wt-yLddcrf0O')
  
    e.target.reset()
  };
   return (
    <section id="contact" className="contact-section">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>catherina.n.elkhoury@gmail.com</h5>
            <a href="mailto:catherina.n.elkhoury@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <SiInstagram />
            <h4>Direct Message</h4>
            <h5>@kathyelkhoury</h5>
            <a href="https://ig.me/m/kathyelkhoury" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <ImWhatsapp />
            <h4>Whatsapp</h4>
            <h5>(961) 76 355 974</h5>
            <a href="https://api.whatsapp.com/send?phone=+96176355974" target="_blank">Send a message</a>
      
          </article>

        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact