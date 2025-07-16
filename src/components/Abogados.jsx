import React from "react";
import { FaUserTie } from "react-icons/fa";

const abogados = [
  {
    nombre: "Abogado 1",
    descripcion:
      "Especialista en derecho civil y comercial, con más de 15 años de experiencia asesorando empresas y particulares en litigios complejos y negociaciones estratégicas.",
    icono: <FaUserTie className="text-blue-700 text-6xl mb-4 mx-auto" />,
  },
  {
    nombre: "Abogado 2",
    descripcion:
      "Experto en derecho penal y laboral, reconocido por su enfoque humano y su capacidad para resolver casos de alta sensibilidad con profesionalismo y ética.",
    icono: <FaUserTie className="text-blue-700 text-6xl mb-4 mx-auto" />,
  },
];

const Abogados = () => (
  <section className="bg-white py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10 text-center">
        Nuestro Equipo de Abogados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {abogados.map((abogado, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            {abogado.icono}
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{abogado.nombre}</h3>
            <p className="text-gray-700 text-base sm:text-lg">{abogado.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Abogados;