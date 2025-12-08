import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ carouselRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

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
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={e => {
              e.preventDefault();
              navigate("/");
              closeMenu();
              
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/${isTransparent ? 'logoSantinoBlanco.png' : 'logoSantinoNegro.png'}`} className="h-10" style={{ height: '52px', width: 'auto' }} alt="Logo Santino" />
          </a>
          {/* Menú principal */}
          <ul className={`hidden md:flex space-x-8 font-medium ${isTransparent ? 'text-white' : 'text-black'}`}>
            <li>
              <a
                href="#"
                className="font-mona transition-transform duration-200"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'
                }
                onClick={e => {
                  e.preventDefault();
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >Inicio</a>
            </li>
            <li>
              <a
                href="#"
                className="font-mona transition-transform duration-200"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'
                }
                onClick={e => {
                  e.preventDefault();
                  navigate("/firma");
                  window.scrollTo(0, 0);
                }}
              >Quienes Somos</a>
            </li>
            <li>
              <a
                href="#"
                className="font-mona transition-transform duration-200"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'
                }
                onClick={e => {
                  e.preventDefault();
                  navigate("/areas");
                  window.scrollTo(0, 0);
                }}
              >Áreas de práctica</a>
            </li>
            <li>
              <a
                href="#"
                className="font-mona transition-transform duration-200"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'
                }
                onClick={e => {
                  e.preventDefault();
                  navigate("/profesionales");
                  window.scrollTo(0, 0);
                }}
              >Profesionales</a>
            </li>
            <li>
              <a
                href="#"
                className="font-mona transition-transform duration-200"
                style={{ display: 'inline-block', transition: 'transform 0.2s', fontWeight: 400 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'
                }
                onClick={e => {
                  e.preventDefault();
                  navigate("/contacto");
                  window.scrollTo(0, 0);
                }}
              >Contacto</a>
            </li>
          </ul>
          {/* Botón hamburguesa en móvil */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
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
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate("/");
              closeMenu();
            }}
            className="block hover:text-blue-700"
          >Inicio</a>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate("/firma");
              closeMenu();
            }}
            className="block hover:text-blue-700"
          >Quienes Somos</a>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate("/areas");
              closeMenu();
            }}
            className="block hover:text-blue-700"
          >Áreas de práctica</a>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate("/profesionales");
              closeMenu();
            }}
            className="block hover:text-blue-700"
          >Profesionales</a>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate("/contacto");
              closeMenu();
            }}
            className="block hover:text-blue-700"
          >Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
