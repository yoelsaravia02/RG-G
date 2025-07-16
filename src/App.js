import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Carousel from "./components/Carousel.jsx";
import ShapeDivider from "./components/ShapeDivider.jsx";
import PracticeAreas from "./components/PracticeAreas.jsx";
import Firma from "./components/Firma.jsx";
import Abogados from "./components/Abogados.jsx";
import Contacto from "./components/Contacto.jsx";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <div>
      <div className="h-screen flex flex-col">
        <NavBar fading={fading} />
        <div className="flex-1 relative">
          <Carousel setFading={setFading} />
          <ShapeDivider />
        </div>
      </div>
      <Firma />
      <PracticeAreas/>
      <Abogados />
      <Contacto/>
    </div>


  );
}

export default App;