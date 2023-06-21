import { useState } from 'react'
import NavBar from './componentes/navbar/NavBar';
import Home from './componentes/home/Home';
import './App.css'
import SobreMi from './componentes/sobreMi/SobreMi';
import { Route , Routes} from 'react-router';


function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobremi" element={<SobreMi/>}/>
    </Routes>
    </>
  )
}

export default App
