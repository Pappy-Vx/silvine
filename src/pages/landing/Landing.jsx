import React from 'react'
import "./landing.css"
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
const Landing = () => {
  return (
    <>
    <section className='hero'>
    <div>
    <Nav /> 
    </div>
    <div className='container'>
      
            <div>
                <h1 className="hero-title">
                Unleashing the Power of <span className='hero-investment'>Investments ::</span>
                </h1>
                <p>Silvine strategies transform futures</p>
            </div>
            <div>
                <h3 className="hero-text">
                Silvine Investment:
                </h3>
                <p> Empowering Your Financial Journey</p>
            </div>
            <div>
            <button className="cta">
  <span className="hover-underline-animation"> Read Company Strategy </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
    fill='#F2EDE4'
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button>
            </div>
            
        
    </div>
    </section>
    <section className='impact'>
    <h2 >
        our impact
        </h2>
        <p>Fulfilling Promise: Unveiling the Transformative Impact of Our Initiatives</p>
        <div className='impact_containers'>
        <div className='impact1'></div>
        <div className='impact2'></div>
        </div>
    </section>
       
    <section>
        Hero
    </section>
    <section>
        <Footer />
    </section>
    </>
  )
}

export default Landing