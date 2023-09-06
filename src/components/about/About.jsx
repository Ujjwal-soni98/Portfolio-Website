import React from 'react'
import './about.css'
import Me from '../../assets/Me2.jpg'
const About = () => {
  return (
    <section id="about">
      <h5 className='gettoknow'>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="aboutme-image">
            <img src={Me} className='mee' alt="" />
          </div>

       
  
        </div>
        <div className="about_content">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ad ipsam quos deleniti voluptatem neque, distinctio, harum animi excepturi eligendi dolor accusantium esse aut id! Sit nam molestias temporibus assumenda.</p>
        <a href="#contact" className='btn btn-primary contact'>Let's Talk</a>
        </div>
      </div>
    </section>
      
    
  )
}

export default About
