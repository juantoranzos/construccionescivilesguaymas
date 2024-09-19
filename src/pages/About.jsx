import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ing from '../img/ingguay.jpeg';
import about from '../img/nieve3.jpeg';

const About = () => {
  return (
    <div>
      <NavbarComponent/>
      
      <section className='position-relative'>
        <div className='zoom-effect'>
          <img src={about} alt="About" className='img-fluid w-100' />
          <h2 id='nosotros' className=' position-absolute top-50 start-0 translate-start text-white display-4 p-3 m-3'>Nosotros</h2>
        </div>
      </section>
      
      <div className='container my-5 nuestro'>
        
        <h4 className='text-center display-6' id='h21'>GUAYMÁS, Luis Angel - Ingeniero Civil</h4>
        
        <section className='row my-5'>
          <div className='col-12 col-lg-4'>
            <p className='text-center text-justify shadow p-3'>Desde nuestra fundación en 2006, Construcciones Civiles ha emergido como líder en la industria de la construcción para el sector minero, destacando nuestro compromiso con la excelencia y seguridad en cada uno de nuestros más de 300 proyectos realizados. Con más de 18 años en el rubro de la construcción, hemos logrado ejecutar proyectos exitosos en diversas mineras del Noroeste argentino y zona Precordillerana, consolidando una sólida trayectoria y experiencia en el campo.</p>
          </div>
          <div className='col-12 col-lg-4 d-flex justify-content-center align-items-center zoom-effectt'>
            <img src={ing} alt="Ingeniero" className='img-fluid rounded mx-auto d-block' />
          </div>
          <div className='col-12 col-lg-4'>
            <p className='text-center text-justify shadow p-3'>Desde nuestros primeros pasos en 2006, Construcciones Guaymás ha destacado como referente en la construcción para el sector minero, demostrando nuestra dedicación a la innovación y calidad en más de 300 obras culminadas. Con 18 años de experiencia en construcción, hemos implementado proyectos destacados en varias mineras del Noroeste argentino y la región precordillerana, construyendo una base sólida de conocimientos y éxito en el sector.</p>
          </div>
        </section>
        
        <p className='text-center text-justify p-3'>En Construcciones Civiles Guaymás, el servicio de atención al cliente TODAVÍA IMPORTA, ¡y nos encantaría tener la oportunidad de ayudarte en tu próximo proyecto!</p>
      </div>
    </div>
  );
};

export default About;
