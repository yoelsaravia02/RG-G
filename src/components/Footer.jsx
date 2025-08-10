
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-black text-white pt-10" style={{ background: '#000' }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center md:grid md:grid-cols-3 md:gap-10 pb-10">
        {/* Columna izquierda: Logo y redes */}
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-0">
          <img src={`${process.env.PUBLIC_URL}/logoFooter.jpg`} alt="Logo Footer" className="mb-4" style={{ width: '160px', height: 'auto' }} />
          <div className="flex items-center gap-4 mt-2 text-white text-xl justify-center">
            <a href="mailto:info@rg-estudio.com" aria-label="Correo">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/5493510000000" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Columna central */}
        <div className="text-sm flex flex-col items-center mb-8 md:mb-0 font-mona justify-start" style={{paddingBottom: '70px'}}>
          <ul className="space-y-2 text-center">
            <li>Publicaciones</li>
            <li>Equipo</li>
            <li>Gestión de riesgos</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div className="text-sm flex flex-col items-center font-mona justify-start" style={{paddingBottom: '70px'}}>
          <ul className="space-y-2 text-center">
            <li>Áreas de práctica</li>
            <li>Trabajar en R & G</li>
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
