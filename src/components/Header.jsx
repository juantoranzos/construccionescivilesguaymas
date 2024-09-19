import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  return (
    <section className="w-100 py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 p-3 text-white" style={{ backgroundColor: '#043055' }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Fade direction="up">
              <h1 style={{ fontSize: '62px' }}>Líderes en Construcción para el Sector Minero.</h1>
              <p style={{ color: 'grey', fontSize: '24px' }}>
                Más de 18 años de experiencia y 300 proyectos exitosos en el Noroeste Argentino y zona Precordillerana.
                <br />

              📍Santa María, Catamarca, Argentina.
              </p>
            </Fade>
          </div>
          <div className="space-x-4">
            <button  className="btn btn-light m-2 btn-lg ">Solicitar Presupuesto</button>
            <button className="btn btn-light m-2 btn-lg">Nuestros Proyectos</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
