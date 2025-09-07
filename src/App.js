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

// Importamos HelmetProvider
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  const [fading, setFading] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* Meta por defecto (para toda la web) */}
        <Helmet>
          <title>RG & G - Bureau Legal</title>
          <meta
            name="description"
            content="Righetti Gandione & Grounds - Bureau legal especializado en derecho corporativo, civil y comercial."
          />
          <link rel="canonical" href="https://righettigandionegrounds.com.ar/" />
        </Helmet>

        <NavBar fading={fading} />

        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Inicio | RG & G - Bureau Legal</title>
                  <meta
                    name="description"
                    content="Bienvenido a Righetti Gandione & Grounds, un bureau legal con experiencia en diversas áreas de práctica."
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
                  <title>La Firma | RG & G - Bureau Legal</title>
                  <meta
                    name="description"
                    content="Conoce la historia, valores y trayectoria de nuestro bureau legal."
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
                  <title>Áreas de práctica | RG & G - Bureau Legal</title>
                  <meta
                    name="description"
                    content="Especialistas en derecho corporativo, civil, comercial y más."
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
                  <title>Profesionales | RG & G - Bureau Legal</title>
                  <meta
                    name="description"
                    content="Conoce a los abogados y profesionales que forman parte de nuestro equipo."
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
                  <title>Contacto | RG & G - Bureau Legal</title>
                  <meta
                    name="description"
                    content="Contactate con RG & G Bureau Legal."
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
