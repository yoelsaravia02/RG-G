const cards = [
  {
    img: "/docs/images/blog/image-1.jpg",
    title: "Righetti Sagrera Santino",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
  },
  {
    img: "/docs/images/blog/image-2.jpg",
    title: "Gandione Santiago",
    desc: "Descubre cómo R&G Bureau Legal lidera el asesoramiento en Derecho Minero en Córdoba.",
    link: "#",
  },
  {
    img: "/docs/images/blog/image-3.jpg",
    title: "Compromiso y ética profesional",
    desc: "Nuestro equipo se distingue por su rigor técnico y compromiso ético en cada caso.",
    link: "#",
  },
];

const LaFirma = () => {
  return (
    <section className="bg-black pt-20 pb-12 px-4" style={{ backgroundColor: "#000" }}>
      {/* Cards Flowbite */}
      <div style={{marginTop: "30px" }} className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto"
            >
              <a href={card.link}>
                <img className="rounded-t-lg w-full h-48 object-cover" src={card.img} alt={card.title} />
              </a>
              <div className="p-5">
                <a href={card.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.desc}</p>
                <a
                  href={card.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Texto institucional */}
      <div className="py-12 max-w-4xl mx-auto font-bona text-white space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">R&G Bureau Legal</h2>
        <p className="font-mona text-lg md:text-xl">
          Righetti & Gandione Bureau Legal es una firma jurídica orientada a brindar soluciones legales especializadas en materias complejas, con enfoque en la empresa, la actividad patrimonial, la contratación civil y comercial, y los sectores estratégicos de la economía.
        </p>
        <p className="font-mona text-lg md:text-xl">
          La firma se distingue por su rigor técnico, su análisis meticuloso y su adhesión a los más altos estándares éticos y profesionales. Cada asunto es abordado con tratamiento reservado, estudio doctrinario profundo y criterio jurídico fundado en la normativa vigente y en la jurisprudencia aplicable. Asimismo, la firma se distingue por ser el único estudio jurídico de la Provincia de Córdoba que ha desarrollado una propuesta innovadora y técnicamente consolidada en el ámbito del Derecho Minero, prestando asesoramiento jurídico específico a empresas e inversores vinculados a la exploración, explotación y gestión de derechos mineros.
        </p>
        <p className="font-mona text-lg md:text-xl">
          El servicio se presta con seriedad, discreción y compromiso, procurando siempre respuestas eficaces, sustentables y jurídicamente consistentes.
        </p>
        <p className="font-mona text-lg md:text-xl">
          En R&G Bureau Legal, la práctica del Derecho es concebida como una disciplina de precisión, orientada a preservar intereses legítimos y facilitar decisiones fundadas en un marco de seguridad jurídica.
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Quiénes Somos</h3>
        <p className="font-mona text-lg md:text-xl">
          Formación académica de excelencia, práctica jurídica calificada y compromiso ético
        </p>
        <p className="font-mona text-lg md:text-xl">
          R&G Bureau Legal es una firma fundada por Santino Righetti Sagrera y Santiago Gandione, abogados egresados de la Facultad de Derecho de la Universidad Nacional de Córdoba, institución de reconocida trayectoria en la formación de abogados en la República Argentina.
        </p>
        <p className="font-mona text-lg md:text-xl">
          Ambos profesionales han iniciado su carrera en el ámbito del ejercicio privado del Derecho bajo la guía del prestigioso Estudio Jurídico Ferla - Muzi, donde adquirieron una sólida experiencia en diversas ramas del ordenamiento jurídico.
        </p>
        <p className="font-mona text-lg md:text-xl">
          La filosofía de R&G Bureau Legal se sustenta en la combinación de conocimiento técnico riguroso, análisis jurídico preciso y una permanente vocación de servicio. Asumimos cada asunto encomendado con absoluta dedicación, estricta confidencialidad y un profundo respeto por los principios éticos que rigen la profesión.
        </p>
        <p className="font-mona text-lg md:text-xl">
          Nuestra actuación se caracteriza por la solvencia conceptual, el trato reservado y la búsqueda constante de soluciones jurídicas eficientes, sustentadas en el estudio doctrinario, la interpretación normativa y la praxis forense.
        </p>
        <p className="font-mona text-lg md:text-xl">
          En R&G Bureau Legal, concebimos el Derecho como una herramienta de orden, previsión y resguardo, puesta al servicio de quienes requieren respaldo jurídico con seriedad, solvencia y responsabilidad.
        </p>
      </div>
    </section>
  );
};

export default LaFirma;
