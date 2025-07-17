import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import PracticeAreas from "./components/PracticeAreas.jsx";
import Abogados from "./components/Abogados.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar fading={fading} />
        <Routes>
          <Route path="/inicio" element={<HomePage setFading={setFading} />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;