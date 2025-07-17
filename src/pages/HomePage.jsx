import React from "react";
import Carousel from "../components/Carousel.jsx";
import ShapeDivider from "../components/ShapeDivider.jsx";
import Firma from "../components/Firma.jsx";
import Novedades from "../components/Novedades.jsx";

const HomePage = ({ setFading }) => (
  <div>
    <div className="h-screen flex flex-col">
      {/* Puedes pasar setFading si Carousel lo necesita */}
      <div className="flex-1 relative">
        <Carousel setFading={setFading} />
        <ShapeDivider />
      </div>
    </div>
    <Firma />
    <Novedades />
  </div>
);

export default HomePage;