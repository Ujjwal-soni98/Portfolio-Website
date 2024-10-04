import React from 'react'
import RESUME from '../../assets/Ujjwal_ResumeUpdated.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download CV</a>
        <a href ="#contact" className='btn btn-primary'>Let's Talk</a>      
    </div>
  )
}

export default CTA
