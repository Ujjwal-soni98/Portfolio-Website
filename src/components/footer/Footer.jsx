import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo"></a>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://twitter.com/Ujjwal__Soni"><FontAwesomeIcon icon={faXTwitter} style={{color: "#fff",}} /></a>
        <a href="https://www.linkedin.com/in/ujjwal-soni/"><ImLinkedin/></a>
        <a href="https://github.com/Ujjwal-soni98"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ujjwal Soni. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
