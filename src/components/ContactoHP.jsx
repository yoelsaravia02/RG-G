import React, { useState } from "react";
import ModalCita from "./ModalCita";

const ContactoHP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up" data-aos-duration="800"
        className="rounded-2xl px-4 md:px-8 lg:px-16 text-center"
        style={{
          backgroundColor: "#161616ff",
          paddingTop:"100px",
          paddingBottom:"50px"
        }}
      >
        {/* <p style={{color:"#d4d4d4ff"}}className="font-semibold text-xl uppercase tracking-widest mb-3 font-goudy">
          AGENDA CITA
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white my-8 font-goudy">
          RESERVA HOY UNA CONSULTA
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto my-8 font-bona" style={{ fontSize: "20px" }}>
          Dejanos tus datos para ser contactado por nuestro equipo y coordinar día/hora de atención.
        </p> */}
        <button
          style={{ width: "400px", height: "100px" }}
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black cursor-pointer hover:bg-gray-500 hover:text-white font-bold py-3 px-8 rounded-lg transition uppercase text-2xl tracking-wide font-mona"
        >
          QUIERO UNA CITA
        </button>
      </div>

      <ModalCita isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactoHP;