import React from 'react'
import './project.css'
// import Image from '../../assets/mee.jpg';
import QR from '../../assets/qr-code.jpg'
import Drum from '../../assets/drum_keys.png'
import Sprinthacks from '../../assets/sprinthacks.png'
import Portfolio from '../../assets/Portfolio.png'
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        <article className="project_item">
          <div className="project_item-image"><img src={QR} alt="" /></div>
          <h3>Text-2-QR</h3>
          <div className="project_item-cta">
          <a href="https://github.com/Ujjwal-soni98/Text-2-QR" className='btn'>GitHub</a>
          <a href="https://github.com/Ujjwal-soni98/Text-2-QR" className='btn btn-primary' target='__blank'>Live demo</a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={Drum} alt="" />
          </div>
          <h3>Drum Strokes</h3>
          <div className="project_item-cta">
          <a href="https://github.com/Ujjwal-soni98/Drumkit" className='btn'>GitHub</a>
          <a href="ujjwal-soni98.github.io/Drumkit/" className='btn btn-primary' target='__blank'>Live demo</a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
          <img src={Sprinthacks} alt="" />
          </div>
          <h3>College Hackathon Website</h3>
          <div className="project_item-cta">
          <a href="https://github.com/Ujjwal-soni98/SprintHacks-Website" className='btn'>GitHub</a>
          <a href="https://sprinthacks.vercel.app/" className='btn btn-primary' target='__blank'>Live demo</a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={Portfolio} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="project_item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='__blank'>Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project
