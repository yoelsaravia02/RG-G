import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import LaFirma from "./pages/LaFirma.jsx";
import Footer from "./components/Footer.jsx";
import Contacto from "./pages/Contacto.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AreasDePractica from "./pages/AreasDePractica.jsx";
import Profesionales from "./pages/Profesionales.jsx";

import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* SEO global por defecto */}
        <Helmet>
          <title>Righetti Gandione & Grounds - Bureau Legal</title>
          <meta
            name="description"
            content="Firma jurídica. Brindamos soluciones legales estratégicas en Córdoba y Argentina."
          />
          <link rel="canonical" href="https://righettigandionegrounds.com.ar/" />
        </Helmet>

        <NavBar fading={fading} />

        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Inicio */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Righetti Gandione & Grounds - Bureau Legal</title>
                  <meta
                    name="description"
                    content="Firma jurídica. Brindamos soluciones legales estratégicas en Córdoba y Argentina."
                  />
                  <link
                    rel="canonical"
                    href="https://righettigandionegrounds.com.ar/"
                  />
                </Helmet>
                <HomePage setFading={setFading} />
              </>
            }
          />

          {/* La Firma */}
          <Route
            path="/firma"
            element={
              <>
                <Helmet>
                  <title>La Firma - RG & G</title>
                  <meta
                    name="description"
                    content="Conocé la trayectoria, valores y profesionales detrás de Righetti Gandione & Grounds. Experiencia en el ámbito jurídico nacional e internacional."
                  />
                  <link
                    rel="canonical"
                    href="https://righettigandionegrounds.com.ar/firma"
                  />
                </Helmet>
                <LaFirma />
              </>
            }
          />

          {/* Áreas de práctica */}
          <Route
            path="/areas"
            element={
              <>
                <Helmet>
                  <title>Áreas de Práctica - RG & G</title>
                  <meta
                    name="description"
                    content="Derecho societario, minero, civil y comercial, ambiental, bancario, M&A, seguros, propiedad intelectual y más."
                  />
                  <link
                    rel="canonical"
                    href="https://righettigandionegrounds.com.ar/areas"
                  />
                </Helmet>
                <AreasDePractica />
              </>
            }
          />

          {/* Profesionales */}
          <Route
            path="/profesionales"
            element={
              <>
                <Helmet>
                  <title>Profesionales - RG & G</title>
                  <meta
                    name="description"
                    content="Conocé al equipo de abogados y especialistas que conforman Righetti Gandione & Grounds. Comprometidos con brindar asesoramiento jurídico integral."
                  />
                  <link
                    rel="canonical"
                    href="https://righettigandionegrounds.com.ar/profesionales"
                  />
                </Helmet>
                <Profesionales />
              </>
            }
          />

          {/* Contacto */}
          <Route
            path="/contacto"
            element={
              <>
                <Helmet>
                  <title>Contacto - RG & G</title>
                  <meta
                    name="description"
                    content="Contactá con Righetti Gandione & Grounds. Asesoramiento legal en Córdoba y Argentina."
                  />
                  <link
                    rel="canonical"
                    href="https://righettigandionegrounds.com.ar/contacto"
                  />
                </Helmet>
                <Contacto />
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
