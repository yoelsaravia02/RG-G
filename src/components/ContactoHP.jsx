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