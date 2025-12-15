import { IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    img: `${process.env.PUBLIC_URL}/2fotoSantino.png`,
    title: "Santino Righetti Sagrera",
    puesto: "Socio Fundador",
    mail: "srighetti@righettigandionegrounds.com.ar",
    mailLink: "mailto:srighetti@righettigandionegrounds.com.ar",
    linkedinLink: "https://www.linkedin.com/in/santino-righetti-sagrera-a4854b189/",
    whatsapp: "+5493518063677",
  },
  {
    img: `${process.env.PUBLIC_URL}/2fotoGandione.png`,
    title: "Santiago Gandione",
    puesto: "Socio Fundador",
    mail: "sgandione@righettigandionegrounds.com.ar",
    mailLink: "mailto:sgandione@righettigandionegrounds.com.ar",
    linkedinLink: "https://www.linkedin.com/in/santiago-gandione-79b261306/",
    whatsapp: "+5493584497250",
  },
  {
    img: `${process.env.PUBLIC_URL}/2fotoGrounds.png`,
    title: "Trinidad Carolina Grounds",
    puesto: "Socia Fundadora",
    mail: "tgrounds@righettigandionegrounds.com.ar",
    mailLink: "mailto:tgrounds@righettigandionegrounds.com.ar",
    linkedinLink: "https://www.linkedin.com/in/trinidad-grounds-19714a248/",
    whatsapp: "+5491164090255",
  },
];

const Profesionales = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pb-12" style={{ backgroundColor: "#161616ff", paddingBottom: "calc(2rem + 5px)" }}>
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
        <h1 className="text-4xl font-bold" data-aos="zoom-in">
          Profesionales
        </h1>
      </div>

      <div style={{ marginTop: "30px" }} className="py-8 max-w-full mx-auto mb-12 px-4 sm:px-8 md:px-12 lg:px-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              className="flex flex-col items-center text-center pb-4 rounded-lg mx-auto" 
              style={{ width: "100%", maxWidth: "400px", background: "#292828ff"}}
            >
              {/* Imagen */}
              <div style={{ height: "400px", width: "100%" }} className="mb-4">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={card.img}
                  alt={card.title}
                />
              </div>

              {/* Nombre */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-dm-serif px-2">
                {card.title}
              </h3>

              {/* Puesto */}
              <p className="text-gray-400 text-sm sm:text-md mb-4 font-mona px-2">
                {card.puesto}
              </p>

              {/* Iconos Mail, WhatsApp y LinkedIn */}
              <div className="flex justify-center gap-4">
                <a
                  href={card.mailLink}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                  title={card.mail}
                >
                  <IoMailSharp size={24} />
                </a>
                <a
                  href={`https://wa.me/${card.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                  title={card.whatsapp}
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href={card.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profesionales;