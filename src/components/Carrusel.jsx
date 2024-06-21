
import React from 'react';
import { Carousel } from 'react-bootstrap';
import todalasmaquinas from '../img/todaslasmaquinas.jpeg'
import livent from '../img/livent.jpeg'
import camionetanieve from '../img/camionetanieve.jpeg'
// Asegúrate de crear e importar un archivo CSS para estilos personalizados

const CarouselComponent = () => {
  return (

    <Carousel>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src={todalasmaquinas}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={livent}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={camionetanieve}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
