import React from 'react'
import imagen1 from '../img/descarga.svg'
import imagen2 from '../img/conversation.svg'
import imagen3 from '../img/payment.svg'

export const QueNosDiferencia = () => {
    return (
        <>
      <div className='container mt-5 mb-5 text-center  rounded cards' id='diferencia'>
      <h2 className='text-center mt-3 mb-3 display-5 p-2 py-5' id='h21'>¿Qué Nos Diferencia De La Competencia?</h2>
      <div className="row justify-content-around ">
        <div className='col-md-3 mb-4'>
          <div className='border border-end-0 border-white shadow-lg p-4'>
            <img src={imagen1} className="w-100 mb-3" alt="" />
            <h3 id='h21'>Envío Rápido El Mismo Día O Al Día Siguiente Para Artículos En Stock</h3>
            <p>Contamos con una amplia experiencia en proyectos de todo tipo y tamaño.</p>
          </div>
        </div>
        <div className='col-md-3 mb-4'>
          <div className='border border-end-0 border-white shadow-lg p-4'>
            <img src={imagen2} className="w-100 mb-3" alt="" />
            <h3 id='h21'> La Atención Al Cliente
            Sigue Siendo Muy Importante Para Nosotros</h3>
            <p>Contamos con una amplia experiencia en proyectos de todo tipo y tamaño.</p>
          </div>
        </div>
        <div className='col-md-3 mb-4'>
          <div className='border border-white shadow-lg p-4'>
            <img src={imagen3} className="w-100 mb-3" alt="" />
            <h3 id='h21' className='text-center text-justify'>  Productos Que Se Adaptan
            A Cualquier Proyecto Y Presupuesto.</h3>
            <p>Somos un distribuidor de línea completa y trabajamos con fabricantes líderes en la industria.</p>
          </div>
        </div>
      </div>
    </div>
          
        </>
    )
}
