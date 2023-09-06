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
        <p>Namaste Atithi,<br></br><br />I am Ujjwal Soni, a web developer from India🙏. I love to learn new technologies particularly interested in web technologies for now.<br></br><q>Learning should never be stoppeed!</q> So I am Still learning.
        </p>
        <a href="#contact" className='btn btn-primary contact'>Let's Talk</a>
        </div>
      </div>
    </section>
      
    
  )
}

export default About
