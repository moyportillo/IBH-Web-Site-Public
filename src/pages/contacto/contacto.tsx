import { motion, useScroll, useTransform } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";

import bgContacto from "@/assets/img/iglesia.jpg";

const ContactoComponent = () => {

    /* SCROLL */
    const { scrollY } = useScroll();

    /* PARALLAX */
    const backgroundY = useTransform(scrollY, [0, 600], [0, 200]);
    const backgroundScale = useTransform(scrollY, [0, 600], [1.05, 1]);

    return (
        <main className="w-full">

            {/* HERO CON PARALLAX */}
            <section className="relative min-h-screen overflow-hidden">

                {/* IMAGEN CON PARALLAX */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgContacto})`,
                        y: backgroundY,
                        scale: backgroundScale
                    }}
                />

                {/* CAPA BLANCA CON OPACIDAD */}
                <div className="absolute inset-0 bg-white/70 z-10" />

                {/* CONTENIDO */}
                <div className="relative z-20 min-h-screen flex items-center">
                    <div className="max-w-6xl mx-auto px-6 py-20 w-full">

                        {/* TITULO */}
                        <motion.h1
                            className="mt-10 text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Contáctanos
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-center text-gray-800 max-w-2xl mx-auto mb-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Estamos para servirte. Escríbenos o síguenos en nuestras
                            redes sociales y sé parte de nuestra comunidad.
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-14">

                            {/* FORMULARIO */}
                            <motion.div
                                className="bg-white shadow-2xl rounded-2xl p-8"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                                    <FaEnvelope /> Envíanos un mensaje
                                </h2>

                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    />

                                    <textarea
                                        placeholder="Mensaje"
                                        rows={4}
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
                                    >
                                        Enviar mensaje
                                    </button>
                                </form>
                            </motion.div>

                            {/* REDES SOCIALES */}
                            <motion.div
                                className="flex flex-col justify-center items-center text-center"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl font-semibold text-blue-900 mb-4">
                                    Síguenos
                                </h2>

                                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-md">
                                    Conéctate con nosotros y mantente al día con
                                    nuestras predicaciones y actividades.
                                </p>

                                {/* ICONOS CENTRADOS */}
                                <div className="flex gap-8">
                                    <motion.a
                                        whileHover={{ scale: 1.2 }}
                                        href="https://wa.me/50492316056"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600"
                                    >
                                        <FaWhatsapp size={36} />
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.2 }}
                                        href="https://www.facebook.com/profile.php?id=100081298615573"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700"
                                    >
                                        <FaFacebookF size={36} />
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.2 }}
                                        href="https://www.youtube.com/@iglesiabautistahebron1905"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-600"
                                    >
                                        <FaYoutube size={36} />
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.2 }}
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-600"
                                    >
                                        <FaInstagram size={36} />
                                    </motion.a>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactoComponent;
