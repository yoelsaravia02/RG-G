import React from 'react';
import { useForm } from 'react-hook-form';

const Contacto = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "onChange" }); // <-- Validación en cada cambio

    const onSubmit = (data) => {
        console.log('Consulta enviada:', data);
        reset();
    };

    return (
        <section className="bg-white py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Columna Izquierda */}
                <div>
                    <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
                        ¿Por Qué Elegir Nuestro Estudio?
                    </h2>

                    <div className="flex items-start gap-4 mb-6">
                        <div className="bg-yellow-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md text-lg">
                            🏅
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Historial Comprobado</h4>
                            <p className="text-gray-600">
                                Más de $50 millones recuperados para nuestros clientes con una tasa de éxito del 95%.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                        <div className="bg-yellow-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md text-lg">
                            👥
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Equipo Experimentado</h4>
                            <p className="text-gray-600">
                                Abogados con décadas de experiencia combinada en sus respectivos campos.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-yellow-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md text-lg">
                            🕒
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Disponibilidad 24/7</h4>
                            <p className="text-gray-600">
                                Estamos aquí cuando más nos necesita, con soporte las 24 horas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="p-8 rounded-xl shadow-lg w-full" style={{ backgroundColor: "#102a42" }}>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Obtenga Su Consulta Gratuita
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <input
                                type="text"
                                placeholder="Nombre Completo"
                                {...register('nombre', {
                                    required: "Ingrese nombre completo",
                                    maxLength: {
                                        value: 50,
                                        message: "Máximo 50 dígitos"
                                    }
                                })}
                                className="p-3 rounded-md bg-[#1e3a5f] text-black placeholder-gray-300 border-none outline-none"
                            />
                            {errors.nombre && (
                                <span className="text-red-500 text-sm">{errors.nombre.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <input
                                type="email"
                                placeholder="Correo Electrónico"
                                {...register('email', {
                                    required: "Ingrese mail válido",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Ingrese mail válido"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Máximo 50 dígitos"
                                    }
                                })}
                                className="p-3 rounded-md bg-[#1e3a5f] text-black placeholder-gray-300 border-none outline-none"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <input
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]+"
                                maxLength={13}
                                placeholder="Número de Teléfono"
                                {...register('telefono', {
                                    required: "Ingrese su teléfono de contacto",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Ingrese solo números"
                                    },
                                    maxLength: {
                                        value: 13,
                                        message: "Máximo 13 dígitos"
                                    }
                                })}
                                className="p-3 rounded-md bg-[#1e3a5f] text-black placeholder-gray-300 border-none outline-none"
                                onInput={e => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                            />
                            {errors.telefono && (
                                <span className="text-red-500 text-sm">{errors.telefono.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <textarea
                                rows={4}
                                placeholder="Describa su asunto legal"
                                {...register('mensaje', { required: "Describa su asunto legal", maxLength: { value: 100, message: "Máximo 100 dígitos" } })}
                                className="p-3 rounded-md bg-[#1e3a5f] text-black placeholder-gray-300 border-none outline-none resize-none"
                            />
                            {errors.mensaje && (
                                <span className="text-red-500 text-sm">{errors.mensaje.message}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`font-bold py-3 rounded-md transition-colors bg-yellow-400 text-[#0f2c48] hover:bg-yellow-300
                ${Object.keys(errors).length === 0 ? "cursor-pointer" : "cursor-not-allowed"}`}
                            disabled={Object.keys(errors).length !== 0}
                        >
                            Solicitar Consulta Gratuita
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
