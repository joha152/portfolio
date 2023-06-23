import { useState } from 'react'
import NavBar from './componentes/navbar/NavBar';
import Home from './componentes/home/Home';
import './App.css'
import SobreMi from './componentes/sobreMi/SobreMi';
import { Route , Routes} from 'react-router';
import Proyectos from './componentes/proyectos/Proyectos';
import Contacto from './componentes/contacto/Contacto';
import Footer from './componentes/footer/Footer';

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobremi" element={<SobreMi/>}/>
      <Route path="/proyectos" element={<Proyectos/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
