import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Carousel from "./components/Carousel.jsx";
import ShapeDivider from "./components/ShapeDivider.jsx";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <NavBar fading={fading} />
      <div className="flex-1 relative">
        <Carousel setFading={setFading} />
        <ShapeDivider />
      </div>
    </div>
  );
}

export default App;