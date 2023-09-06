import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {FiPhoneCall} from 'react-icons/fi'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef()
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_bwiuuan', 'template_4a90f2c', form.current, 'kaSt8TuyiGU4CBR30')
  e.target.reset()
   
};

  return (

    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <TfiEmail className='contact_option-icons'/>
            <h4>Email</h4>
            <h5>ujjwal.soniji@gmail.com</h5>
            <a className='email-link' href="mailto: ujjwal.soniji@gmail.com" target='_blank'>Send here an e-mail</a>
          </article>
          <article className="contact_option">
            <FiPhoneCall className='contact_option-icons'/>
            <h4>Phone</h4>
            <h5>**********</h5>
            <a href="#"></a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button  type="submit" className='btn message btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
