import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const NavBar = ({ carouselRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  
  // 1. Estado para controlar el breakpoint exacto de 960px
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960);
  
  const navigate = useNavigate();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // 2. Efecto para detectar el cambio de tamaño de pantalla (Resize)
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 960;
      setIsMobileView(mobile);
      // Si pasamos a escritorio (>= 960px), cerramos el menú móvil automáticamente
      if (!mobile) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Efecto del Scroll (Se mantiene igual)
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef?.current) {
        setIsTransparent(window.scrollY < 50);
        return;
      }
      const rect = carouselRef.current.getBoundingClientRect();
      if (rect.bottom <= 0) {
        setIsTransparent(false);
      } else if (window.scrollY < 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [carouselRef]);

  let bgOpacity = 0;
  if (!isTransparent && carouselRef?.current) {
    const rect = carouselRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom > 0 && rect.top < windowHeight) {
      bgOpacity = Math.min(1, 1 - rect.bottom / windowHeight);
    } else {
      bgOpacity = 1;
    }
  }
  const navBg = isTransparent ? `rgba(255,255,255,${bgOpacity})` : 'rgba(255,255,255,1)';

  return (
    <nav style={{
      background: navBg,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      transition: 'background 0.5s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center p-4">
        <div className="w-full flex justify-between items-center mb-2">
          {/* Logo */}
          <button
            className="flex items-center space-x-3 rtl:space-x-reverse bg-none border-none p-0 cursor-pointer"
            onClick={() => {
              navigate("/");
              closeMenu();
            }}
            aria-label="Ir a inicio"
          >
            <img src={`${process.env.PUBLIC_URL}/${isTransparent ? 'logoSantinoBlanco1.png' : 'logoSantinoNegro1.png'}`} className="h-10" style={{ height: '52px', width: 'auto' }} alt="Logo Santino" />
          </button>

          {/* Menú principal (Enlaces) */}
          {/* Lógica: Si es vista móvil (<960px), se oculta ('hidden'). Si es escritorio, se muestra ('flex'). */}
          <ul className={`${isMobileView ? 'hidden' : 'flex'} space-x-8 font-medium items-center ${isTransparent ? 'text-white' : 'text-black'}`}>
            <li>
              <button
                className="font-mona transition-transform duration-200 bg-none border-none p-0 cursor-pointer"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >Inicio</button>
            </li>
            <li>
              <button
                className="font-mona transition-transform duration-200 bg-none border-none p-0 cursor-pointer"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/firma");
                  window.scrollTo(0, 0);
                }}
              >Quienes Somos</button>
            </li>
            <li>
              <button
                className="font-mona transition-transform duration-200 bg-none border-none p-0 cursor-pointer"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/areas");
                  window.scrollTo(0, 0);
                }}
              >Áreas de práctica</button>
            </li>
            <li>
              <button
                className="font-mona transition-transform duration-200 bg-none border-none p-0 cursor-pointer"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/profesionales");
                  window.scrollTo(0, 0);
                }}
              >Profesionales</button>
            </li>
            <li>
              <button
                className="font-mona transition-transform duration-200 bg-none border-none p-0 cursor-pointer"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  navigate("/contacto");
                  window.scrollTo(0, 0);
                }}
              >Contacto</button>
            </li>
            {/* Separador */}
            <li style={{
              height: '24px',
              width: '1px',
              backgroundColor: isTransparent ? 'white' : 'black'
            }}></li>
            
            {/* Redes Sociales */}
            <li>
              <a
                href="https://www.linkedin.com/company/righetti-gandione"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5493517584697"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/righettigandione/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>

          {/* Botón hamburguesa */}
          {/* Lógica: Solo se muestra si es vista móvil (<960px). En escritorio se oculta. */}
          {isMobileView && (
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menú"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}

        </div>
      </div>
      
      {/* Overlay oscuro */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isMobileMenuOpen ? "opacity-40 visible" : "opacity-0 invisible"
          }`}
        onClick={closeMenu}
      />
      
      {/* Menú móvil deslizable */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-700 hover:text-red-500 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-4 font-medium text-black">
          <button
            onClick={() => {
              navigate("/");
              closeMenu();
            }}
            className="block hover:text-blue-700 w-full text-left bg-none border-none p-0 cursor-pointer"
          >Inicio</button>
          <button
            onClick={() => {
              navigate("/firma");
              closeMenu();
            }}
            className="block hover:text-blue-700 w-full text-left bg-none border-none p-0 cursor-pointer"
          >Quienes Somos</button>
          <button
            onClick={() => {
              navigate("/areas");
              closeMenu();
            }}
            className="block hover:text-blue-700 w-full text-left bg-none border-none p-0 cursor-pointer"
          >Áreas de práctica</button>
          <button
            onClick={() => {
              navigate("/profesionales");
              closeMenu();
            }}
            className="block hover:text-blue-700 w-full text-left bg-none border-none p-0 cursor-pointer"
          >Profesionales</button>
          <button
            onClick={() => {
              navigate("/contacto");
              closeMenu();
            }}
            className="block hover:text-blue-700 w-full text-left bg-none border-none p-0 cursor-pointer"
          >Contacto</button>
          <div className="border-t pt-4 mt-4 flex gap-4">
            <a
              href="https://www.linkedin.com/company/righetti-gandione"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/5493517584697"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href="https://www.instagram.com/righettigandione/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
              aria-label="WhatsApp"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;