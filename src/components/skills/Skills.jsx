import React from 'react'
import './skills.css'
import {PiSealCheckFill} from 'react-icons/pi'
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>HTML</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>CSS</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>JavaScript</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>Bootstrap</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>Tailwind CSS</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>React.js</h4>
                  </div>
                </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>Node.js</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>Express.js</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>API</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons'/>
                  <div>
                  <h4>MySQL</h4>
                  </div>
                </article>
                <article className="experience_details">
                  <PiSealCheckFill className='experience_details-icons' />
                  <div>
                  <h4>Postman</h4>
                  </div>
                </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills
