import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/ujjwal-soni/" target='_blank'><ImLinkedin/></a>
      <a href="https://github.com/Ujjwal-soni98" target='_blank'><BsGithub/></a>
      <a href="#" target='_blank'></a>
    </div>
  )
}

export default HeaderSocials
