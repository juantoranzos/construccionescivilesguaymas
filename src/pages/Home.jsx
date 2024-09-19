import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Carrusel from '../components/Header'
import { Elegirnos } from '../components/Elegirnos'
import { QueNosDiferencia } from '../components/QueNosDiferencia'
import { Footer } from '../components/Footer'
import { Historia } from '../components/Historia'
import { Contacto } from '../components/Contacto'
import Header from '../components/Header'
import  Proyectos  from '../components/Proyectos'

export const Home = () => {
  return (
    <>
     <NavbarComponent/>
     <Header/>
     <QueNosDiferencia/>
     <Historia/>
     <Elegirnos/>
     <Proyectos/>
     <Contacto/>
     <Footer/>
    </>
   
  )
}
