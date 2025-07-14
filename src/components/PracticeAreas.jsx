import React from "react";
import { FaUserTie, FaBalanceScale, FaUsers, FaBuilding, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const areas = [
  {
    icon: <FaUserTie className="text-yellow-400 text-4xl mb-2" />,
    title: "Derecho Laboral",
    description: "Representación integral para trabajadores y sus derechos laborales.",
  },
  {
    icon: <FaBalanceScale className="text-yellow-400 text-4xl mb-2" />,
    title: "Derecho Penal",
    description: "Estrategias de defensa agresivas para todos los cargos penales.",
  },
  {
    icon: <FaUsers className="text-yellow-400 text-4xl mb-2" />,
    title: "Derecho de Familia",
    description: "Orientación compasiva en asuntos legales familiares.",
  },
  {
    icon: <FaBuilding className="text-yellow-400 text-4xl mb-2" />,
    title: "Derecho Comercial",
    description: "Soluciones legales estratégicas para empresas de todos los tamaños.",
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-400 text-4xl mb-2" />,
    title: "Derecho Inmobiliario",
    description: "Manejo experto de todas las transacciones y disputas inmobiliarias.",
  },
  {
    icon: <FaRegClock className="text-yellow-400 text-4xl mb-2" />,
    title: "Derecho Sucesorio",
    description: "Proteja su legado con planificación sucesoria integral.",
  },
];

const PracticeAreas = () => {
  return (
    <section className="bg-white my-8 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestras Áreas de Práctica</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Brindamos asesoramiento legal experto en múltiples áreas de práctica para atender todas sus necesidades legales con la más alta calidad profesional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              {area.icon}
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
