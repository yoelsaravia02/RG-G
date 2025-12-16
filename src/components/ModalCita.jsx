import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, Slide } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const ModalCita = ({ isOpen, onClose }) => {
  // Propiedades del modal (modifica aquí)
  const MODAL_WIDTH = "600px";
  const MODAL_HEIGHT = "auto";
  const ROW_GAP = "0px"; // Modifica aquí el espacio entre filas en píxeles
  
  const [isClosing, setIsClosing] = useState(false);

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

  // Manejo de tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && !isClosing) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isClosing, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 800);
  };

  const onSubmit = async (data) => {
    if (!captchaValue) {
      setShowCaptchaError(true);
      toast.error("Debes completar el reCAPTCHA", { position: "bottom-left" });
      return;
    }

    const url = "https://form-back-mail.vercel.app/api/contact.js";
    const payload = { ...data, captcha: captchaValue, tipo: "cita" };

    const controller = new AbortController();
    const TIMEOUT_MS = 15000;
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
          throw json ?? { message: text ?? `HTTP ${res.status}` };
        }

        if (json && json.success === false) {
          throw json;
        }

        return json ?? { success: true, message: "Cita solicitada correctamente" };
      })
      .catch((err) => {
        if (err && err.name === "AbortError") {
          throw { message: "Timeout: la petición tardó demasiado" };
        }
        throw err;
      });

    try {
      await toast.promise(
        sendPromise,
        {
          pending: "Solicitando cita...",
          success: {
            render({ data }) {
              return data?.message ?? "Cita solicitada correctamente ✅";
            },
          },
          error: {
            render({ data }) {
              return data?.message ?? "Hubo un error al solicitar la cita ❌";
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

      reset();
      setValue("captcha", null);
      setShowCaptchaError(false);
      handleClose();
    } catch {
      return;
    }
  };

  const onCaptchaChange = (value) => {
    setValue("captcha", value);
    if (value) setShowCaptchaError(false);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 ${
        isClosing ? "animate-fade-out" : "animate-fade-in"
      }`}
      style={{
        backgroundColor: isClosing ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.7)",
        transition: "background-color 0.8s ease-out",
        animation: isClosing ? "fadeDown 0.8s ease-out forwards" : "fadeUp 0.8s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-30px);
          }
        }
      `}</style>
      <div 
        className="bg-white rounded-lg p-8 max-h-[65vh] overflow-y-auto"
        style={{ width: MODAL_WIDTH, height: MODAL_HEIGHT }}
      >
        {/* Header con título y botón cerrar */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="mt-1 text-2xl font-bold text-gray-700 flex-1 font-goudy uppercase">
            Quiero que me contacten
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-3xl ml-4"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Descripción */}
        <p className="text-gray-700 mb-3 text-lg sm:text-sm font-mona" style={{}}>
          Dejanos tus datos para ser contactado por nuestro equipo y coordinar
          día/hora de atención.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: ROW_GAP}}>
          {/* Nombre */}
          <div>
            <input
              type="text"
              placeholder="Tu Nombre"
              {...register("nombre", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
            <div style={{ minHeight: "20px" }} className="mt-1">
              {errors.nombre && (
                <span className="text-red-500 text-sm">
                  El nombre es requerido
                </span>
              )}
            </div>
          </div>

          {/* E-mail y WhatsApp en grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                placeholder="Correo Electrónico"
                {...register("email", { required: true })}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <div style={{ minHeight: "20px" }} className="">
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    El correo es requerido
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Teléfono"
                {...register("telefono")}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <div style={{ minHeight: "20px" }} className="mt-1"></div>
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <textarea
              placeholder="Comenta brevemente tu caso."
              {...register("mensaje", { required: true, minLength: 10, maxLength: 250 })}
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm"
              style={{ resize: "none" }}
              maxLength={250}
            />
            <div className="flex justify-between items-center" style={{ minHeight: "20px", marginTop: "-2px" }}>
              <div className="min-w-0">
                {errors.mensaje && (
                  <span className="text-red-500 text-sm">
                    El mensaje es requerido (mínimo 10 caracteres)
                  </span>
                )}
              </div>
              <span className={`text-sm ${mensajeValue.length >= 250 ? "text-red-500" : "text-gray-600"}`}>
                {`${mensajeValue.length}/250`}
              </span>
            </div>
          </div>

          {/* reCAPTCHA y Botón en la misma fila */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4" style={{ marginTop: "24px" }}>
            <div className="flex-1">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}
                onExpired={() => setValue("captcha", null)}
                onErrored={() => setValue("captcha", null)}
              />
              <div style={{ minHeight: "20px" }} className="mt-2">
                {showCaptchaError && (
                  <span className="text-red-500 text-sm">
                    Debes completar el reCAPTCHA
                  </span>
                )}
              </div>
            </div>
            <div className="w-full sm:w-auto sm:flex-shrink-0" style={{ marginTop: "max(0px, -15px)" }}>
              <button
                type="submit"
                style={{ width: "200px", height: "75px", marginBottom:"20px" }}
                className="w-full sm:w-auto bg-gray-900 hover:bg-gray-600  text-white font-bold rounded-lg transition uppercase text-sm tracking-wide whitespace-nowrap"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs ">
          Nuestro equipo te contactará para coordinar día/hora de atención.
        </p>
      </div>
    </div>
  );
};

export default ModalCita;