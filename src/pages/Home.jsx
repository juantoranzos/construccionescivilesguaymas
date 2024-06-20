import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Carrusel from '../components/Carrusel'
import { Elegirnos } from '../components/Elegirnos'
import { QueNosDiferencia } from '../components/QueNosDiferencia'
import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'

export const Home = () => {
  return (
    <>
     <NavbarComponent/>
     <Carrusel/>
     <QueNosDiferencia/>
     <Elegirnos/>
     <Formulario></Formulario>
     <Footer/>
    </>
   
  )
}
