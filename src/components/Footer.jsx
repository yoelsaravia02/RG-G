import React from "react";
import { FaEnvelope, FaWhatsapp, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-red-500 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center md:grid md:grid-cols-3 md:gap-10 pb-10">
        {/* Columna izquierda: Logo y redes */}
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-0">
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase">Estudio de Abogados</p>
            <h2 className="text-2xl font-semibold mt-2 leading-tight">
              Righetti <br /> & Gandione
            </h2>
          </div>
          <div className="flex items-center gap-4 mt-4 text-white text-xl justify-center">
            <a href="mailto:info@rg-estudio.com" aria-label="Correo">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/5493510000000" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Columna central */}
        <div className="text-sm flex flex-col items-center mb-8 md:mb-0">
          <ul className="space-y-2 text-center">
            <li>Publicaciones</li>
            <li>Equipo</li>
            <li>Gestión de riesgos</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div className="text-sm flex flex-col items-center">
          <ul className="space-y-2 text-center">
            <li>Áreas de práctica</li>
            <li>Trabajar en RG&G</li>
            <li>Equipo</li>
            <li>Aviso Legal</li>
          </ul>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="bg-black text-xs text-center py-4 px-4 relative">
        <p className="text-white">
          ESTUDIO DE ABOGADOS RIGHETTI Y GANDIONE. Todos los derechos reservados. Prohibida su reproducción total o parcial.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
