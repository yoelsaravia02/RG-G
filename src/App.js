import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Accordion from "./components/Corousel.jsx";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <NavBar fading={fading} />
      <div className="flex-1">
        <Accordion setFading={setFading} />
      </div>
    </div>
  );
}

export default App;