import React from "react";

const LaFirma = () => {
  return (
    <section className="bg-black pb-12" style={{ backgroundColor: "#000" }}>
      {/* Imagen de fondo con título */}
      <div
        className="h-72 bg-cover bg-center flex flex-col justify-center items-center text-white mb-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/oficina.jpg)`,
          marginTop: 0,
        }}
      >
        <h1 className="text-4xl font-bold">¿Quienes Somos?</h1>
      </div>
      {/* Texto institucional */}
      <div className="py-12 max-w-4xl mx-auto font-bona text-white space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">R&G Bureau Legal</h2>
        <p className="font-mona text-lg md:text-xl text-justify">
          Righetti & Gandione Bureau Legal es una firma jurídica orientada a brindar soluciones legales especializadas en materias complejas, con enfoque en la empresa, la actividad patrimonial, la contratación civil y comercial, y los sectores estratégicos de la economía.
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          La firma se distingue por su rigor técnico, su análisis meticuloso y su adhesión a los más altos estándares éticos y profesionales. Cada asunto es abordado con tratamiento reservado, estudio doctrinario profundo y criterio jurídico fundado en la normativa vigente y en la jurisprudencia aplicable. Asimismo, la firma se distingue por ser el único estudio jurídico de la Provincia de Córdoba que ha desarrollado una propuesta innovadora y técnicamente consolidada en el ámbito del Derecho Minero, prestando asesoramiento jurídico específico a empresas e inversores vinculados a la exploración, explotación y gestión de derechos mineros.
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          El servicio se presta con seriedad, discreción y compromiso, procurando siempre respuestas eficaces, sustentables y jurídicamente consistentes.
        </p>
        <p className="font-mona text-lg md:text-xl">
          En R&G Bureau Legal, la práctica del Derecho es concebida como una disciplina de precisión, orientada a preservar intereses legítimos y facilitar decisiones fundadas en un marco de seguridad jurídica.
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Quiénes Somos</h3>
        <p className="font-mona text-lg md:text-xl">
          Formación académica de excelencia, práctica jurídica calificada y compromiso ético
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          R&G Bureau Legal es una firma fundada por Santino Righetti Sagrera y Santiago Gandione, abogados egresados de la Facultad de Derecho de la Universidad Nacional de Córdoba, institución de reconocida trayectoria en la formación de abogados en la República Argentina.
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          Ambos profesionales han iniciado su carrera en el ámbito del ejercicio privado del Derecho bajo la guía del prestigioso Estudio Jurídico Ferla - Muzi, donde adquirieron una sólida experiencia en diversas ramas del ordenamiento jurídico.
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          La filosofía de R&G Bureau Legal se sustenta en la combinación de conocimiento técnico riguroso, análisis jurídico preciso y una permanente vocación de servicio. Asumimos cada asunto encomendado con absoluta dedicación, estricta confidencialidad y un profundo respeto por los principios éticos que rigen la profesión.
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          Nuestra actuación se caracteriza por la solvencia conceptual, el trato reservado y la búsqueda constante de soluciones jurídicas eficientes, sustentadas en el estudio doctrinario, la interpretación normativa y la praxis forense.
        </p>
        <p className="font-mona text-lg md:text-xl text-justify">
          En R&G Bureau Legal, concebimos el Derecho como una herramienta de orden, previsión y resguardo, puesta al servicio de quienes requieren respaldo jurídico con seriedad, solvencia y responsabilidad.
        </p>
      </div>
    </section>
  );
};

export default LaFirma;