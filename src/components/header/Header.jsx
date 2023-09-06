import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const lottieStyle = {width: "300px",
                    height: "300px"}
const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5 className='hello'>Hello I'm </h5> 
      <h1 className="ujjwal">Ujjwal Soni</h1>
      <h5 className="text-light">A web Developer from India❤️</h5>
      {/* <h1>Typer.js is
  <span class="typer" id="main" data-words="great,fun,lightweight,easy" data-delay="100" data-deleteDelay="1000"></span>
  <span class="cursor" data-owner="main"></span>
</h1>
<p>the typing effect with a pure HTML interface</p> */}

      <CTA />
      <HeaderSocials />

      <div className="me">
      <lottie-player src="https://lottie.host/27103916-dc30-4849-9190-2ae7bbb85b3e/STXVbxx1UL.json" background="" speed="1" style={lottieStyle} loop autoplay direction="1" mode="normal"></lottie-player>
      </div>
      <a href="#contact" className='scrolldown'>Scroll Down</a>
      
      </div>    
    </header>
  )
}

export default Header
