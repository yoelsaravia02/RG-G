import { IoMailSharp } from "react-icons/io5";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    img: `${process.env.PUBLIC_URL}/1fotoSantino.jpg`,
    title: "Santino Righetti Sagrera",
    puesto: "Socio Fundador",
    desc: "Apasionado por el derecho y por transformar los problemas en soluciones reales, tanto para personas como para empresas. Desde mis primeros pasos entendí que la abogacía no es solo interpretar normas, sino acompañar proyectos, defender intereses y generar confianza. Soy cordobés, egresado del Colegio Gabriel Taborin y abogado por la Facultad de Derecho de la Universidad Nacional de Córdoba.\nCon esa convicción, a los 23 años fundé, junto a mis colegas, nuestro propio Bureau Legal, un espacio pensado para brindar un servicio jurídico integral y estratégico. Mi práctica se centra en el Derecho Societario, Minero y el asesoramiento en Family Office, áreas en las que me comprometo a ofrecer respuestas claras, eficaces y sostenibles, siempre con dedicación y profesionalismo.",
    link: "mailto:srighetti@righettigandionegrounds.com.ar",
    mail: "srighetti@righettigandionegrounds.com.ar",
  },
  {
    img: `${process.env.PUBLIC_URL}/fotoGandione.jpg`,
    title: "Santiago Gandione",
    puesto: "Socio Fundador",
    desc: "Egresado con honores de la Facultad de Derecho de la Universidad Nacional de Córdoba, encontré en el derecho una verdadera vocación: la de transformar los conflictos en soluciones concretas. Mi especialidad es el Derecho Civil y Comercial, con énfasis en litigios, donde combino técnica, estrategia y dedicación para defender los intereses de quienes confían en nuestro trabajo.\nCon la misma pasión, desarrollo también mi práctica en Derecho Minero, acompañando a profesionales y empresas del area en proyectos que requieren asesoramiento tecnico y legal.\nDesarrollé parte de mi trayectoria en uno de los estudios jurídicos de mayor prestigio de la Ciudad de Córdoba, experiencia que me permitió profundizar en el Derecho Civil y Comercial, permitiendo afianzar una mirada inteligente en la resolución de conflictos.\nA los 23 años cofundé un espacio pensado para brindar un servicio jurídico concreto y planificado, basado en la excelencia, la cercanía y el compromiso con cada cliente.",
    link: "mailto:sgandione@righettigandionegrounds.com.ar",
    mail: "sgandione@righettigandionegrounds.com.ar",
  },
  {
    img: `${process.env.PUBLIC_URL}/fotoGrounds.jpg`,
    title: "Trinidad Carolina Grounds",
    puesto: "Socia Fundadora",
    desc: "Egresada de la Facultad de Derecho de la Universidad Nacional de Córdoba (UNC), me apasiona el derecho tanto desde el estudio académico y la enseñanza, como desde la práctica profesional. Esta combinación me ha permitido desarrollar sólidas habilidades para la resolución de problemas con responsabilidad, organización y compromiso.\nCuento con experiencia en litigios en materia Tributaria, Civil y Comercial, y he desarrollado un especial interés por el Derecho de la Navegación. Disfruto del trabajo en equipo, del aprendizaje constante y de los desafíos que implican crecimiento personal y profesional, buscando siempre dar respuestas eficaces y aportar valor en cada proyecto en el que participo.",
    link: "mailto:tgrounds@righettigandionegrounds.com.ar",
    mail: "tgrounds@righettigandionegrounds.com.ar",
  },
];

const cardWidthClasses = `
  w-full
  max-w-[500px]
  xl:max-w-[400px]
  lg:max-w-[340px]
  md:max-w-[90vw]
`;

const Profesionales = () => {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true }); // inicializa AOS
    }, []);
  return (
    <section className="bg-black pb-12" style={{ backgroundColor: "#161616ff" }}>
      {/* Imagen de fondo con título */}
      <div
        className="bg-cover bg-center flex flex-col justify-center items-center text-white mb-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/oficina1.jpg)`,
          marginTop: 0,
          marginBottom: "60px",
          height: "350px",
        }}
      >
        <h1 className="text-4xl font-bold" data-aos="zoom-in" >Profesionales</h1>
      </div>
      <div style={{ marginTop: "30px", marginBottom: "-1px" }} className="py-8 max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto flex flex-col h-full ${cardWidthClasses}`} // 👈 agregamos h-full
              style={{ borderRadius: "20px" }}
            >
              {/* Imagen */}
              <a href={card.link}>
                <div style={{ height: "480px", width: "100%" }}>
                  <img
                    className="rounded w-full h-full object-cover"
                    src={card.img}
                    alt={card.title}
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </a>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-1"> {/* 👈 flex-1 para expandir */}
                {/* Título */}
                <a href={card.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                </a>

                {/* Puesto */}
                <p
                  className="text-gray-600 dark:text-gray-300 font-semibold"
                  style={{ fontSize: "16px", marginTop: "8px", marginBottom: "12px" }}
                >
                  {card.puesto}
                </p>

                {/* Descripción */}
                <p
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify"
                  style={{ whiteSpace: "pre-wrap", flexGrow: 1 }} // 👈 se estira
                >
                  {card.desc}
                </p>

                {/* Mail alineado al fondo */}
                <div className="flex items-center mt-auto pt-4"> {/* 👈 mt-auto lo empuja al fondo */}
                  <a
                    href={card.link}
                    className="inline-flex items-center justify-center px-3 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    aria-label="Correo"
                    style={{
                      borderRadius: "9px",
                      width: "40px",
                      height: "35px",
                      fontSize: "unset",
                      lineHeight: 0,
                    }}
                  >
                    <IoMailSharp
                      style={{
                        fontSize: "20px",
                        minWidth: "25px",
                        minHeight: "40px",
                        display: "block",
                      }}
                    />
                  </a>
                  <p
                    className="ml-3 text-white font-mona break-words"
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      width: "0",
                      flexGrow: 1,
                    }}
                  >
                    {card.mail}
                  </p>
                </div>
              </div>
            </div>


          ))}
        </div>




      </div>
    </section>
  )
}

export default Profesionales