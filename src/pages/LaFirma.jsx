import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LaFirma = () => {
  const [isMobileLayout, setIsMobileLayout] = useState(window.innerWidth < 1200);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => {
      setIsMobileLayout(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-black overflow-hidden" style={{ backgroundColor: "#161616ff", marginBottom: "-1px" }}>
      
      {/* Header Image */}
      <div
        className="h-72 bg-cover bg-center flex flex-col justify-center items-center text-white mb-6 sm:mb-10 w-full"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/oficina1.jpg)`,
          marginTop: 0,
          marginBottom: "60px",
          height: "350px",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 text-center " data-aos="zoom-in">¿Quienes Somos?</h1>
      </div>

      {/* Main Container */}
      <div className="w-full mb-16 px-[30px] md:px-[60px] lg:px-[100px] lg:ml-[170px]">

        {/* GRID CONTAINER */}
        <div 
          className="grid gap-8 lg:gap-12 items-start max-w-6xl pb-6" 
          style={{
            display: "grid",
            gridTemplateColumns: isMobileLayout ? "1fr" : "1fr 1fr", 
            
            // --- AQUÍ ESTÁN LAS PROPIEDADES QUE PEDISTE ---
            // Modifica "30px" por el valor que quieras para la vista de UNA SOLA COLUMNA (< 1200px).
            // El segundo valor ("130px" y "150px") es para pantallas grandes.
            paddingRight: isMobileLayout ? "70px" : "130px", 
            paddingLeft: isMobileLayout ? "70px" : "150px",
          }}
        >

          {/* 1. Texto Superior */}
          <div className="font-bona text-white space-y-6" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold font-dm-serif">
              RG&G Bureau Legal
            </h2>
            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              Righetti Gandione & Grounds Bureau Legal es una firma jurídica orientada a brindar soluciones legales especializadas en materias complejas, con enfoque en la empresa, la actividad patrimonial, la contratación civil y comercial, y los sectores estratégicos de la economía.
            </p>
            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              La firma se distingue por su rigor técnico, su análisis meticuloso y su adhesión a los más altos estándares éticos y profesionales. Cada asunto es abordado con tratamiento reservado, estudio doctrinario profundo y criterio jurídico fundado en la normativa vigente y en la jurisprudencia aplicable. Asimismo, la firma se distingue por brindar una propuesta innovadora en el ámbito del Derecho Minero, prestando asesoramiento jurídico específico a empresas e inversores vinculados a la exploración, explotación y gestión de derechos mineros.
            </p>
            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              En RG&G Bureau Legal, la práctica del Derecho es concebida como una disciplina de precisión, orientada a preservar intereses legítimos y facilitar decisiones fundadas en un marco de seguridad jurídica.
            </p>
          </div>

          {/* 2. Imagen */}
          <div className="flex justify-center w-full" data-aos="fade-left">
            <img
              src={`${process.env.PUBLIC_URL}/imagen-QS1.png`}
              alt="RG&G Bureau Legal Team"
              className="rounded-lg shadow-lg object-cover"
              style={{ marginTop: "20px", height:"600px", width:"auto" }}
            />
          </div>

          {/* 3. Texto Inferior */}
          <div 
            className="font-bona text-white space-y-6 lg:space-y-8" 
            data-aos="fade-right"
            style={{
              gridColumn: isMobileLayout ? "auto" : "span 2",
              paddingRight: isMobileLayout ? "0px" : "100px"
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 lg:mt-0 mb-4 font-dm-serif text-left">
              Quiénes Somos
            </h3>

            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed">
              Formación académica de excelencia, práctica jurídica calificada y compromiso ético.
            </p>

            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              RG&G Bureau Legal es una firma fundada por Santino Righetti Sagrera, Santiago Gandione y Trinidad Carolina Grounds, abogados egresados de la Facultad de Derecho de la Universidad Nacional de Córdoba, institución de reconocida trayectoria en la formación de abogados en la República Argentina.
            </p>

            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              La triada ha iniciado su carrera en el ámbito del ejercicio privado del Derecho, donde adquirieron una sólida experiencia en diversas ramas del ordenamiento jurídico.
            </p>

            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              La filosofía de RG&G Bureau Legal se sustenta en la combinación de conocimiento técnico riguroso, análisis jurídico preciso y una permanente vocación de servicio. Asumimos cada asunto encomendado con absoluta dedicación, estricta confidencialidad y un profundo respeto por los principios éticos que rigen la profesión.
            </p>

            <p className="font-mona text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              En RG&G Bureau Legal, concebimos el Derecho como una herramienta de orden, previsión y resguardo, puesta al servicio de quienes requieren respaldo jurídico con seriedad, solvencia y responsabilidad.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default LaFirma;