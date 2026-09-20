import React, { useState } from "react";
import ModalCita from "./ModalCita";

const ContactoHP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="absolute z-20 px-4 text-center"
        style={{
          bottom: "calc(16% + 40px)",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button
          style={{ 
            width: "clamp(250px, 90vw, 400px)", 
            height: "clamp(70px, 20vw, 100px)" 
          }}
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black cursor-pointer hover:bg-gray-500 hover:text-white font-bold rounded-lg transition uppercase tracking-wide font-mona text-lg md:text-2xl"
        >
          QUIERO UNA CITA
        </button>
      </div>

      <ModalCita isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactoHP;
