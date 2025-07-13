import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={`${process.env.PUBLIC_URL}/logoSantino.png`} className="h-8" alt="Logo Santino" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap"></span> */}
        </a>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><a href="#" className="hover:text-blue-700">Inicio</a></li>
          <li><a href="#" className="hover:text-blue-700">La Firma</a></li>
          <li
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: 'relative' }}
            >
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Áreas de práctica
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${dropdownOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute md:left-0 md:top-full left-0 top-full`}
              >
                <ul className="py-2 text-sm text-black" aria-labelledby="dropdownNavbarLink">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Área 1</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Área 2</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Área 3</a>
                  </li>
                </ul>
              </div>
            </li>
          <li><a href="#" className="hover:text-blue-700">Profesionales</a></li>
          <li><a href="#" className="hover:text-blue-700">Contacto</a></li>
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

      {/* Overlay oscuro */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isMobileMenuOpen ? "opacity-40 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Menú móvil deslizable */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
          <a href="#" onClick={closeMenu} className="block hover:text-blue-700">Inicio</a>
          <a href="#" onClick={closeMenu} className="block hover:text-blue-700">La Firma</a>
          {/* Desplegable móvil */}
          <div>
            <button
              className="w-full text-left hover:text-blue-700 flex items-center justify-between"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              Áreas de práctica
              <svg className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" onClick={closeMenu} className="block hover:text-blue-700">Área 1</a>
                <a href="#" onClick={closeMenu} className="block hover:text-blue-700">Área 2</a>
                <a href="#" onClick={closeMenu} className="block hover:text-blue-700">Área 3</a>
              </div>
            )}
          </div>
          <a href="#" onClick={closeMenu} className="block hover:text-blue-700">Profesionales</a>
          <a href="#" onClick={closeMenu} className="block hover:text-blue-700">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
