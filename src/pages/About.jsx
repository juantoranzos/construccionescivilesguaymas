import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

const About = () => {
  return (
    <div>

    <NavbarComponent/>
    <section className='position-relative'>
  <div className='zoom-effect'>
    <img src="../public/img/cityscape-footer.jpg" alt="" id='about' className='img-fluid' />
    <h2 id='nosotros' className='position-absolute top-50 start-0 translate-middle-y px-4  display-1 p-5 m-5'>Nosotros</h2>
  </div>
</section>



    
    </div>
    
  )
}

export default About