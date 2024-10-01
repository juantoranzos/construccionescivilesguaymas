import React from 'react';


const Header = () => {
  return (
    <section className="py-5 py-md-6  text-white" style={{ backgroundColor: '#043055' }}>
      <div className="container px-4 px-md-5">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="mb-2">
            <h1 className="display-4 display-md-3" data-aos="fade-left">Líderes en Construcción para el Sector Minero.</h1>
            <p className=" fs-5 text-secondary" data-aos="fade-right" data-aos-delay="200">
              Más de 18 años de experiencia y 300 proyectos exitosos en el Noroeste Argentino y zona Precordillerana.
              <br />
              📍Santa María, Catamarca, Argentina.
            </p>
          </div>
          <div className="mt-4" data-aos="fade-up">
            <button className="btn btn-light m-2 btn-md btn-lg-md">Solicitar Presupuesto</button>
            <button className="btn btn-light m-2 btn-md btn-lg-md">Nuestros Proyectos</button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Header;
