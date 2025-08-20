import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import LaFirma from "./pages/LaFirma.jsx";
// import PracticeAreas from "./components/PracticeAreas.jsx";
// import Abogados from "./components/Abogados.jsx";
// import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import AreasDePractica from "./pages/AreasDePractica.jsx";
import Profesionales from "./pages/Profesionales.jsx";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar fading={fading} />
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage setFading={setFading} />}></Route>
          <Route path="/firma" element={<LaFirma/>}></Route>
          <Route path="/areas" element={<AreasDePractica/>} />
          <Route path="profesionales" element={<Profesionales/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;