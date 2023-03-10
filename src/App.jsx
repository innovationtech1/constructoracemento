import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Iniciando from "./pages/Iniciando";
import About from "./pages/About";
import Informacion from "./pages/Informacion";
import Servicios from "./pages/Servicios";
import AvisoCookies from "./pages/AvisoCookies";
import CreandoProyecto from "./components/CreandoProyecto";
import Home from "./pages/Home"

import"./App.css"
import Proyectos from "./pages/Proyectos";
import Material from "./pages/Material";
import Transporte from "./pages/Transporte";

function App() {
  const [mostrarCreandoProyecto, setMostrarCreandoProyecto] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMostrarCreandoProyecto(false);
    }, 7500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="/constructoracemento/avisocookies/"
            element={<AvisoCookies />}
          />
          <Route
            path="/constructoracemento/home/"
            element={<Home />}
          />
          <Route path="/constructoracemento/" element={<Iniciando />} />
          <Route
            path="/constructoracemento/servicios"
            element={<Servicios />}
          />
          <Route
            path="/constructoracemento/informacion"
            element={<Informacion />}
          />
          <Route path="/constructoracemento/about" element={<About/>} />
      
          <Route
            path="/constructoracemento/proyectos"
            element={<Proyectos/>}
          />
          <Route
            path="/constructoracemento/material"
            element={<Material/>}
          />
          <Route path="/constructoracemento/transporte" element={<Transporte/>} />
        </Routes>
      </BrowserRouter>
      {mostrarCreandoProyecto && <CreandoProyecto />}
    </div>
  );
}

export default App;
