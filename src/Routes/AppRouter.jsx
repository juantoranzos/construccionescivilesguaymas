import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Home } from "../pages/Home";
import React from 'react'
import About from "../pages/About";
import Services from "../pages/Services";
import { Contacto } from "../pages/Contacto";
 const AppRouter = () => {
  return (
   <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/contacto" element={<Contacto />}/>
</Routes>
</BrowserRouter>
   </>
  )
}

export default AppRouter
