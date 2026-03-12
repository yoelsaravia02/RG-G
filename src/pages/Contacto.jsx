import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacto = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // inicializa AOS
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();

  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const RECAPTCHA_SITE_KEY = "6LfetOArAAAAAPP_AVu23bXgDPI4J6JaUeLLsa-C";
  const captchaValue = watch("captcha");
  const mensajeValue = watch("mensaje", "");

  // Configuración de estilos para la sección de contacto
  const contactStyles = {
    fontSize: "18px",         // Tamaño de la letra
    iconSize: "30px",         // Tamaño de los logos
    gap: "60px",              // Espaciado entre renglones
  };

  const onSubmit = async (data) => {
    if (!captchaValue) {
      setShowCaptchaError(true);
      toast.error("Debes completar el reCAPTCHA", { position: "bottom-left" });
      return;
    }

    const url = "https://form-back-mail.vercel.app/api/contact.js";
    const payload = { ...data, captcha: captchaValue };

    // Timeout/Abort para evitar colgar la promesa indefinidamente
    const controller = new AbortController();
    const TIMEOUT_MS = 15000; // ajustar si se desea
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const sendPromise = fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
      .then(async (res) => {
        clearTimeout(timeoutId);
        const text = await res.text().catch(() => null);
        let json = null;
        try {
          json = text ? JSON.parse(text) : null;
        } catch (e) {
          json = null;
        }

        if (!res.ok) {
          // rechazar con info útil si HTTP != 200
          throw json ?? { message: text ?? `HTTP ${res.status}` };
        }

        // si la API indica success:false, también rechazar
        if (json && json.success === false) {
          throw json;
        }

        // éxito
        return json ?? { success: true, message: "Mensaje enviado correctamente" };
      })
      .catch((err) => {
        // Normalizar abort error a mensaje legible
        if (err && err.name === "AbortError") {
          const timeoutError = new Error("Timeout: la petición tardó demasiado");
          timeoutError.message = "Timeout: la petición tardó demasiado";
          throw timeoutError;
        }
        // re-lanzar objeto/ Error para que toast.promise lo trate en error.render
        throw err;
      });

    // toast.promise manejará pending -> success / error
    try {
      const result = await toast.promise(
        sendPromise,
        {
          pending: "Enviando mensaje...",
          success: {
            render({ data }) {
              return data?.message ?? "Mensaje enviado correctamente ✅";
            },
          },
          error: {
            render({ data }) {
              return data?.message ?? "Hubo un error al enviar el mensaje ❌";
            },
          },
        },
        {
          position: "bottom-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Slide,
        }
      );

      // éxito: limpiar formulario
      reset();
      setValue("captcha", null);
      setShowCaptchaError(false);
      return result;
    } catch {
      // error ya mostrado por toast; no hacer logs por petición tuya
      return;
    }
  };

  const onCaptchaChange = (value) => {
    setValue("captcha", value);
    if (value) setShowCaptchaError(false);
  };

  return (
    // SE AGREGÓ "overflow-x-hidden" AQUI ABAJO PARA EVITAR EL SCROLL HORIZONTAL
    <div className="bg-gray-50 overflow-x-hidden" style={{ marginBottom: "-1px", backgroundColor: "#161616ff" }}>
      <style>
        {`
          .contact-responsive-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 20px 12px;
            overflow: hidden;
          }
          .contact-responsive-grid .map-container {
            height: 250px;
            width: 100%;
            overflow: hidden;
          }
          .contact-responsive-grid .info-icon {
            font-size: 20px;
            min-width: 20px;
          }
          .contact-responsive-grid .info-text {
            font-size: 18px;
          }
          .contact-responsive-grid .contact-title {
            font-size: 28px;
          }
          .contact-responsive-grid .info-gap {
            gap: 16px;
          }
          @media (max-width: 480px) {
            .contact-responsive-grid .info-text {
              font-size: 12px;
              margin-left: -30px;
            }
              .prueba {
                padding-left: 20px;
              }
          }
          @media (min-width: 520px) {
            .contact-responsive-grid {
              height: auto;
            }
            .contact-responsive-grid .map-container {
              height: 300px;
            }
            .contact-responsive-grid .info-text {
              font-size: 18px;
            }
            .contact-responsive-grid .info-icon {
              font-size: 24px;
              min-width: 24px;
            }
            .contact-responsive-grid .contact-title {
              font-size: 38px;
            }
            .contact-responsive-grid .info-gap {
              gap: 20px;
            }
          }
          @media (min-width: 967px) {
            .contact-responsive-grid {
              grid-template-columns: repeat(2, 1fr);
              padding: 32px 32px;
            }
            .contact-responsive-grid .map-container {
              height: 450px;
            }
            .contact-responsive-grid .info-text {
              font-size: 18px;
            }
            .contact-responsive-grid .info-icon {
              font-size: 30px;
              min-width: 30px;
            }
            .contact-responsive-grid .contact-title {
              font-size: 36px;
            }
            .contact-responsive-grid .info-gap {
              gap: 60px;
            }
          }
        `}
      </style>
      {/* Toast Container */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      {/* Imagen de fondo con título */}
      <div
        className="h-72 bg-cover bg-center flex flex-col justify-center items-center text-white mb-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/oficina1.jpg)`,
          marginBottom: "60px",
          height: "350px",
        }}
      >
        <h1 className="text-4xl font-bold" data-aos="zoom-in">Contacto</h1>
      </div>

      {/* Mapa + Información */}
      <div className="w-full px-2 pt-8 pb-16 flex justify-center">
        <div className="w-full" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="contact-responsive-grid items-start py-8 px-8 rounded-lg" style={{ background: "#363636ff"}}>
            {/* Información a la izquierda */}
            <div className="flex flex-col justify-center" data-aos="fade-right">
              <h2 className="text-4xl font-serif font-bold text-gray-800 my-5 text-white font-dm-serif prueba">
                CONTACTO
              </h2>
              <div className="mt-6 pl-3" style={{ display: "flex", flexDirection: "column", gap: contactStyles.gap }}>
                <div className="flex items-start" style={{ gap: contactStyles.gap }}>
                  <FaPhoneAlt className="text-white flex-shrink-0 mt-1" style={{ fontSize: contactStyles.iconSize }}></FaPhoneAlt>
                  <p className="text-white font-bold font-mona mt-1 info-text">+54 9 3513238562</p>
                </div>
                <div className="flex items-start" style={{ gap: contactStyles.gap }}>
                  <IoMdMail className="text-white flex-shrink-0 mt-1" style={{ fontSize: contactStyles.iconSize }}></IoMdMail>
                  <a
                    href="mailto:estudio@righettigandionegrounds.com.ar"
                    className="text-white hover:underline font-mona mt-1 info-text"
                  >
                    estudio@righettigandionegrounds.com.ar 
                  </a>
                </div>
                <div className="flex items-start" style={{ gap: contactStyles.gap }}>
                  <HiMapPin className="text-white flex-shrink-0 mt-1" style={{ fontSize: contactStyles.iconSize }}></HiMapPin>
                  <div>
                    <p className="text-white font-mona -mt-1 info-text">Obispo Oro 440</p>
                    <p className="text-white font-mona mb-5 info-text">Córdoba, Argentina.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa a la derecha */}
            <div className="flex justify-center items-center" style={{ height: "450px" }} data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5579170220158!2d-64.1817645!3d-31.4263041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a291bfb45281%3A0xb92e36e580615ad5!2sObispo%20Oro%20444%2C%20X5000BFJ%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1757603644358!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                title="Mapa Córdoba"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="w-full px-2 pb-16 flex justify-center" data-aos="fade-up">
        <div className="w-full" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            className="bg-white shadow-md rounded-lg p-4 md:p-8"
            style={{ minHeight: "400px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" style={{ gap: "0px" }}>
              <h3 className="text-2xl font-serif font-semibold mb-4 font-bona">
                Envíanos tu consulta
              </h3>

              <input
                type="text"
                placeholder="Nombre"
                {...register("nombre", { required: true })}
                className="border rounded-lg p-2 mb-1 focus:ring-2 focus:ring-blue-500 w-full "
              />
              <div style={{ minHeight: "20px" }} className="mb-2">
                {errors.nombre && (
                  <span className="text-red-500 text-sm">
                    El nombre es requerido
                  </span>
                )}
              </div>

              <input
                type="email"
                placeholder="Correo Electrónico"
                {...register("email", { required: true })}
                className="border rounded-lg p-2 mb-1 focus:ring-2 focus:ring-blue-500 w-full"
              />
              <div style={{ minHeight: "20px" }} className="mb-2">
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    El correo es requerido
                  </span>
                )}
              </div>

              <input
                type="text"
                placeholder="Teléfono (Opcional)"
                {...register("telefono")}
                className="border rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-500 w-full"
              />
              <div style={{ minHeight: "20px" }} className="mb-2" />

              <textarea
                placeholder="Mensaje"
                {...register("mensaje", { required: true, minLength: 10, maxLength: 250 })}
                className="border rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-500 w-full mb-1"
                style={{ resize: "none" }}
                rows={6}
                maxLength={250}
              />

              <div className="w-full flex justify-between items-center mb-2" style={{ minHeight: "20px" }}>
                <div className="min-w-0">
                  {errors.mensaje && (
                    <span className="text-red-500 text-sm">
                      El mensaje es requerido
                    </span>
                  )}
                </div>

                <div className="ml-4">
                  <span className={`text-sm ${mensajeValue.length >= 250 ? "text-red-500" : "text-gray-600"}`}>
                    {`${mensajeValue.length}/250`}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={onCaptchaChange}
                  onExpired={() => setValue("captcha", null)}
                  onErrored={() => setValue("captcha", null)}
                />
                {showCaptchaError && (
                  <span className="text-red-500 text-sm">
                    Debes completar el reCAPTCHA
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-gray-900 hover:bg-gray-600 hover:text-gray-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;