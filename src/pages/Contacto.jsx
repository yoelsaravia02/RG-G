import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    reset();
  };

  return (
    <div className="bg-gray-50" style={{ backgroundColor: "#161616ff" }}>
      {/* Imagen de fondo con título */}
      <div
        className="h-72 bg-cover bg-center flex flex-col justify-center items-center text-white mb-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/oficina1.jpg)`,
          marginTop: 0,
          marginBottom: "60px",
          height: "350px" // Agrega esta línea
        }}
      >
        <h1 className="text-4xl font-bold">Contacto</h1>
      </div>

      {/* Tarjetas de información */}
      <div
        className="grid grid-responsive-1279 gap-6 mx-auto py-8 px-4"
        style={{
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        {/* Tarjeta Teléfonos */}
        <div className="bg-white shadow-md p-6 text-center flex flex-col items-center rounded-lg">
          <div className="flex justify-center items-center" style={{ fontSize: "48px" }}>
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold text-lg mt-4 mb-2">Teléfonos de contacto</h3>

          {/* Grid de teléfonos */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-x-4 w-full text-xs sm:text-sm text-gray-700 mt-3">
            <div className="font-medium text-center">Righetti</div>
            <div className="font-medium text-center">Gandione</div>
            <div className="font-medium text-center">Grounds</div>

            <div className="text-center break-words">+54-9-351-8063677</div>
            <div className="text-center break-words">+54-9-358-4497250</div>
            <div className="text-center break-words">+54-9-116-4090255</div>
          </div>
        </div>

        {/* Tarjeta Correo */}
        <div
          className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center"
          style={{ height: "200px", minWidth: 0 }}
        >
          <div className="flex justify-center items-center" style={{ fontSize: "48px" }}>
            <IoMdMail />
          </div>
          {/* Título alineado con los otros */}
          <h3 className="font-semibold text-lg mt-4 mb-2">Correo Electrónico</h3>

          {/* Grid de correos separado del título */}
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-2 w-full text-xs text-gray-700"
            style={{
              marginLeft: "-110px",
              marginTop: "3px", // <- Desplaza SOLO la grilla hacia abajo
            }}
          >
            <div className="font-medium text-center">Righetti</div>
            <div className="text-center">srighetti@righettigandionegrounds.com.ar</div>

            <div className="font-medium text-center">Gandione</div>
            <div className="text-center">sgandione@righettigandionegrounds.com.ar</div>

            <div className="font-medium text-center">Grounds</div>
            <div className="text-center">tgrounds@righettigandionegrounds.com.ar</div>
          </div>
        </div>

        {/* Tarjeta Dirección */}
        <div
          className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-center"
          style={{ height: "200px", minWidth: 0 }}
        >
          <div className="flex justify-center items-center" style={{ fontSize: "48px" }}>
            <HiMapPin />
          </div>
          <h3 className="font-semibold text-lg mt-4 mb-2">Dirección</h3>
          <p 
            className="text-gray-700 mt-3 text-sm md:text-base px-2"
            style={{ 
              wordWrap: "break-word", 
              overflowWrap: "break-word",
              lineHeight: "1.4",
              maxWidth: "100%"
            }}
          >
            Obispo Oro 440, Córdoba, Córdoba
          </p>
        </div>
      </div>


      {/* Formulario + mapa */}
      <div className="w-full px-2 pt-16 pb-16 flex justify-center">
        <div
          className="w-full"
          style={{
            maxWidth: "1000px",
            minWidth: 0,
            margin: "0 auto",
          }}
        >
          <div
            className="bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col md:grid md:grid-cols-2 gap-6"
            style={{
              height: "auto",
              minHeight: "540px",
              marginBottom: "64px", // Espaciado extra antes del footer
            }}
          >
            {/* Formulario */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-between"
              style={{ minWidth: 0 }}
            >
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Envíanos tu consulta
              </h3>

              <div style={{ position: "relative", marginBottom: "8px", minHeight: "56px" }}>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("nombre", { required: true })}
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 w-full"
                />
                <span
                  className="text-red-500 text-sm"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-5px",
                    minHeight: "18px",
                    width: "100%",
                    pointerEvents: "none"
                  }}
                >
                  {errors.nombre && "El nombre es requerido"}
                </span>
              </div>

              <div style={{ position: "relative", marginBottom: "8px", minHeight: "56px" }}>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  {...register("email", { required: true })}
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 w-full"
                />
                <span
                  className="text-red-500 text-sm"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-5px",
                    minHeight: "18px",
                    width: "100%",
                    pointerEvents: "none"
                  }}
                >
                  {errors.email && "El correo es requerido"}
                </span>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <input
                  type="text"
                  placeholder="Teléfono"
                  {...register("telefono")}
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div style={{ position: "relative", marginBottom: "28px", minHeight: "70px" }}>
                <textarea
                  placeholder="Mensaje"
                  {...register("mensaje", { required: true })}
                  className="border rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-500 w-full"
                  style={{ resize: "none" }}
                ></textarea>
                <span
                  className="text-red-500 text-sm"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-12px",
                    minHeight: "18px",
                    width: "100%",
                    pointerEvents: "none"
                  }}
                >
                  {errors.mensaje && "El mensaje es requerido"}
                </span>
              </div>

              <div style={{ position: "relative", marginBottom: "28px", minHeight: "40px" }}>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("captcha", { required: true })}
                  />
                  <label className="text-sm">No soy un robot</label>
                </div>
                <span
                  className="text-red-500 text-sm"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    minHeight: "18px",
                    width: "100%",
                    pointerEvents: "none"
                  }}
                >
                  {errors.captcha && "Debes confirmar que no eres un robot"}
                </span>
              </div>

              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
              >
                Enviar
              </button>
            </form>

            {/* Mapa */}
            <div
              className="flex justify-center items-center"
              style={{ paddingTop: "20px", minWidth: 0, width: "100%", height: "470px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5579170220158!2d-64.1817645!3d-31.4263041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a291bfb45281%3A0xb92e36e580615ad5!2sObispo%20Oro%20444%2C%20X5000BFJ%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1757603644358!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Córdoba"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

