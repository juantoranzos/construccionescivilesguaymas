import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

const About = () => {
  return (
    <div>

    <NavbarComponent/>
    <section className='position-relative'>
  <div className='zoom-effect'>
    <img src="img/todaslasmaquinas.jpeg" alt="" id='about' className='img-fluid' />
    <h2 id='nosotros' className='position-absolute top-50 start-0 translate-middle-y px-4  display-1 p-5 m-5 text-light'>Nosotros</h2>
  </div>
</section>
<h3 className='text-center' id='ceo' >Nuestro Ceo y Fundador</h3>
<h4 className='text-center display-6' id='h21'>GUAYMÁS, Luis Angel - Ingeniero Civil</h4>
 <section className='container d-flex col-lg-12'>
  <div>
    <p className='text-center text-justify shadow p-2 m-5 '>Desde nuestra fundación en 2006, Construcciones Civiles ha emergido como líder en la industria de la construcción para el sector minero, destacando nuestro compromiso con la excelencia y seguridad en cada uno de nuestros más de 300 proyectos realizados. Con más de 18 años en el rubro de la construcción, hemos logrado ejecutar proyectos exitosos en diversas mineras del Noroeste argentino y zona Precordillerana, consolidando una sólida trayectoria y experiencia en el campo.</p>
  </div>
  <div>
    <img src="img/ingguay.jpeg" alt=""  className='img-fluid rounded mx-auto d-block' id='ingeniero'/>
  </div>
  <div>
    <p className='text-center text-justify shadow p-2 m-5'>Desde nuestros primeros pasos en 2006, Construcciones Guaymás ha destacado como referente en la construcción para el sector minero, demostrando nuestra dedicación a la innovación y calidad en más de 300 obras culminadas. Con 18 años de experiencia en construcción, hemos implementado proyectos destacados en varias mineras del Noroeste argentino y la región precordillerana, construyendo una base sólida de conocimientos y éxito en el sector.</p>
  </div>
 </section>
 <p className='text-center text-justify p-2'>En Construcciones Civiles Guaymás, el servicio de atención al cliente TODAVÍA IMPORTA, ¡y nos encantaría tener la oportunidad de ayudarte en tu próximo proyecto!</p>



    
    </div>
    
  )
}

export default About