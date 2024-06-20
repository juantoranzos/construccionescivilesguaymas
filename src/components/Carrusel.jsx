
import React from 'react';
import { Carousel } from 'react-bootstrap';
// Asegúrate de crear e importar un archivo CSS para estilos personalizados

const CarouselComponent = () => {
  return (

    <Carousel>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/img/todaslasmaquinas.jpeg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/img/livent.jpeg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/img/camionetanieve.jpeg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
