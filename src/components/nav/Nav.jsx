import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {GoProjectSymlink} from 'react-icons/go'
import {MdContactMail} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ''}><GiSkills/></a>
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === "#project" ? 'active' : ''}><GoProjectSymlink/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav
