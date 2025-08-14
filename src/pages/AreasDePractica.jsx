// src/components/AreasDePractica.jsx
import React, { useState } from "react";

const areas = [
  { titulo: "Derecho Societario", 
    descripcion: "Asesoramiento en la constitución, organización, modificación, escisión, fusión y disolución de sociedades; redacción de estatutos, pactos de socios y reglamentos internos; intervenciones en conflictos societarios; planificación de estructuras corporativas ajustadas a fines empresariales específicos." },
  { titulo: "Derecho Minero", 
    descripcion: (
      <>
        <p>
          R &amp; G Bureau Legal es el único estudio jurídico de la Provincia de Córdoba que ha desarrollado una estructura profesional especializada en el asesoramiento jurídico integral del sector minero.
        </p>
        <p>
          La actuación comprende la adquisición y mantenimiento de derechos mineros, la elaboración y revisión de contratos, la asistencia en materia ambiental, la representación ante autoridades administrativas y el cumplimiento normativo conforme al régimen minero vigente.
        </p>
        <p>
          El abordaje legal se adapta a las exigencias propias de las etapas de prospección, exploración y explotación, tanto a nivel provincial como federal.
        </p>
      </>
    )
  },
  { titulo: "Planificación patrimonial y Family Office", 
    descripcion: "Diseño de estructuras jurídicas orientadas a la protección, administración y transmisión de bienes familiares o empresariales. Implementación de vehículos jurídicos como fideicomisos, donaciones estructuradas, acuerdos sucesorios y otros instrumentos conforme al Código Civil y Comercial de la Nación." },
  { titulo: "Derecho Civil y Comercial - Contratación", 
    descripcion: "Redacción, análisis y negociación de contratos civiles y comerciales. Intervención in la ejecución, interpretación y resolución de obligaciones contractuales. Representación en conflictos derivados de relaciones jurídicas patrimoniales." },
  { titulo: "Derecho de Seguros", 
    descripcion: "Asistencia jurídica en materia de cobertura, reclamos por siniestros, litigios con aseguradoras, redacción de condiciones contractuales y análisis de responsabilidad." },
  { titulo: "Propiedad Intelectual", 
    descripcion: "Protección y registro de marcas, patentes, modelos industriales, derechos de autor, licencias de software y activos intangibles. Representación en procesos administrativos y judiciales vinculados a la defensa de derechos intelectuales." },
  { titulo: "Fusiones y Adquisiciones (M&A)", 
    descripcion: "Asesoramiento en procesos de compraventa de empresas, due diligence legal, diseño contractual y estructuración jurídica de operaciones societarias complejas." },
  { titulo: "Derecho Bancario y Financiero", 
    descripcion: "Elaboración y revisión de contratos financieros, cumplimiento normativo ante organismos de supervisión, estructuración de garantías y operaciones de crédito." },
  { titulo: "Derecho Ambiental", 
    descripcion: "Asesoría en cumplimiento de normativa ambiental, gestión de habilitaciones, intervención en procedimientos sancionatorios, redacción de informes legales y evaluación de impacto jurídico." },
  { titulo: "Derecho Administrativo", 
    descripcion: "Representación en procedimientos administrativos, licitaciones públicas, contrataciones estatales, presentación de recursos y defensa en sede contencioso-administrativa." },
  { titulo: "Energía y Recursos Naturales", 
    descripcion: "Asistencia jurídica a emprendimientos vinculados a hidrocarburos, energías renovables, gestión hídrica y explotación de recursos naturales. Evaluación normativa y acompañamiento en etapas de inversión y ejecución." },
  { titulo: "Concursos y Quiebras", 
    descripcion: "Intervención en procesos de reestructuración patrimonial, concursos preventivos, verificación de créditos, defensa de acreedores y asistencia a empresas en situación de cesación de pagos." }
];

// Divide el array en dos columnas
const mitad = Math.ceil(areas.length / 2);
const col1 = areas.slice(0, mitad);
const col2 = areas.slice(mitad);

export default function AreasDePractica() {
  const [openIndexCol1, setOpenIndexCol1] = useState(null);
  const [openIndexCol2, setOpenIndexCol2] = useState(null);

  const toggleArea = (index, col) => {
    if (col === 1) {
      setOpenIndexCol1(openIndexCol1 === index ? null : index);
    } else {
      setOpenIndexCol2(openIndexCol2 === index ? null : index);
    }
  };

  const renderColumn = (items, openIndex, col) => (
    <div className="flex flex-col gap-4">
      {items.map((area, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-300 rounded overflow-hidden">
            <button
              onClick={() => toggleArea(index, col)}
              className={`w-full text-left px-4 py-3 flex justify-between items-center transition-colors duration-300
                ${isOpen ? "bg-white text-black" : "bg-gray-300 text-black"}`}
            >
              <span className="font-semibold">{area.titulo}</span>
              <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                transition: "max-height 1.5s cubic-bezier(0.4,0,0.2,1)",
                overflow: "hidden",
                background: isOpen ? "#fff" : "transparent"
              }}
            >
              <div className="p-4 text-gray-700 text-sm">
                {area.descripcion}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      {/* Imagen de fondo con título */}
      <div
        className="h-72 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/oficina.jpg)` }}
      >
        <h1 className="text-4xl font-bold">Áreas de práctica</h1>
      </div>

      {/* Dos columnas independientes */}
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderColumn(col1, openIndexCol1, 1)}
        {renderColumn(col2, openIndexCol2, 2)}
      </div>
    </div>
  );
}
