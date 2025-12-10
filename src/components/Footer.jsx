import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white pt-10" style={{ background: "#161616ff" }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center md:grid md:grid-cols-3 md:gap-10 pb-3">
        {/* Columna izquierda: Logo y redes */}
        <div className="flex flex-col items-center gap-4 mb-6 md:mb-0">
          <img
            src={`${process.env.PUBLIC_URL}/1logoFooter-p.png`}
            alt="Logo Footer"
            className="mb-4"
            style={{ width: "320px", height: "auto" }}
          />
          <div className="flex items-center gap-4 mt-2 text-white text-xl justify-center">
            {/* <a href="mailto:info@rg-estudio.com" aria-label="Correo">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/5493510000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </a> */}
          </div>
        </div>

        {/* Columna central y derecha unidas en mobile */}
        <div className="w-full md:w-auto" style={{ marginTop: "-45px" }}>
          <ul className="space-y-2 text-center flex flex-col items-center md:block font-mona text-md">
            <li>
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/firma");
                  window.scrollTo(0, 0);
                }}
              >
                Quienes Somos
              </button>
            </li>
            <li>
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/areas");
                  window.scrollTo(0, 0);
                }}
              >
                Áreas de práctica
              </button>
            </li>
            {/* Solo muestra estos en mobile */}
            <li className="md:hidden">
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/profesionales");
                  window.scrollTo(0, 0);
                }}
              >
                Profesionales
              </button>
            </li>
            <li className="md:hidden">
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/contacto");
                  window.scrollTo(0, 0);
                }}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Columna derecha solo en desktop */}
        <div style={{ marginTop: "-55px" }} className="text-md flex-col items-center font-mona hidden md:flex">
          <ul className="space-y-2 text-center">
            <li>
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/profesionales");
                  window.scrollTo(0, 0);
                }}
              >
                Profesionales
              </button>
            </li>
            <li>
              <button
                className="bg-transparent border-none text-inherit font-inherit cursor-pointer hover:text-blue-300 transition-transform duration-200"
                style={{ 
                  display: 'inline-block', 
                  transition: 'transform 0.2s', 
                  fontWeight: 400 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/contacto");
                  window.scrollTo(0, 0);
                }}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Sección inferior */}
      <div
        className="bg-black text-center py-4 px-4 relative font-mona"
        style={{ fontSize: "0.85rem" }}
      >
        <p className="text-white">
          RIGHETTI GANDIONE & GROUNDS BUREAU LEGAL. Todos los derechos reservados. Prohibida su
          reproducción total o parcial.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
