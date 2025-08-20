import React from 'react'
import { FaEnvelope } from "react-icons/fa"

const cards = [
  {
    img: "/docs/images/blog/image-1.jpg",
    title: "Righetti Santino",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "mailto:srighetti@righettigandionegrounds.com.ar",
    mail: "srighetti@righettigandionegrounds.com.ar",
  },
  {
    img: "/docs/images/blog/image-2.jpg",
    title: "Gandione Santiago",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "mailto:sgandione@righettigandionegrounds.com.ar",
    mail: "sgandione@righettigandionegrounds.com.ar",
  },
  {
    img: "/docs/images/blog/image-3.jpg",
    title: "Grounds Trinidad",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "mailto:tgrounds@righettigandionegrounds.com.ar",
    mail: "tgrounds@righettigandionegrounds.com.ar",
  },
];

const cardWidthClasses = `
  w-full
  max-w-[440px]
  xl:max-w-[400px]
  lg:max-w-[340px]
  md:max-w-[90vw]
`;

const Profesionales = () => {
  return (
    <section className="bg-black pb-12 px-4" style={{ backgroundColor: "#000" }}>
      {/* Imagen de fondo con título */}
      <div
        className="h-72 bg-cover bg-center flex flex-col justify-center items-center text-white mb-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/oficina.jpg)`,
          marginTop: 0,
        }}
      >
        <h1 className="text-4xl font-bold">Profesionales</h1>
      </div>
      <div style={{ marginTop: "30px"}} className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto ${cardWidthClasses}`}
            >
              <a href={card.link}>
                <img className="rounded-t-lg w-full h-48 object-cover" src={card.img} alt={card.title} />
              </a>
              <div className="p-5">
                <a href={card.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.desc}</p>
                <div className="flex items-center mt-2">
                  <a
                    href={card.link}
                    className="inline-flex items-center justify-center px-3 py-2 text-xl text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    aria-label="Correo"
                  >
                    <FaEnvelope />
                  </a>
                  <p
                    className="ml-3 text-white font-mona break-words"
                    style={{ wordBreak: "break-word", overflowWrap: "break-word", width: "0", flexGrow: 1 }}
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