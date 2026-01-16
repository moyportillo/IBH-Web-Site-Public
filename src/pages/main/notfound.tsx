import { motion, useScroll, useTransform } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import bg404 from "@/assets/img/espiritual.jpg";
import {Link} from "react-router-dom"; // tu imagen de fondo para 404

const NotFoundComponent = () => {
    // Hook de scroll
    const { scrollY } = useScroll();

    // Parallax: la imagen se mueve más lento que el scroll
    const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
    const backgroundScale = useTransform(scrollY, [0, 300], [1.1, 1]);

    return (
        <main className="mt-16 md:mt-0 w-full h-screen relative overflow-hidden">

            {/* Imagen de fondo con parallax */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${bg404}')`,
                    y: backgroundY,
                    scale: backgroundScale,
                }}
            />

            {/* Overlay azul semitransparente */}
            <div className="absolute inset-0 bg-blue-900/70" />

            {/* Contenido central */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

                {/* Icono */}
                <motion.div
                    className="text-white mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <FaExclamationTriangle size={100} />
                </motion.div>

                {/* Código 404 */}
                <motion.h1
                    className="text-6xl md:text-8xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    404
                </motion.h1>

                {/* Mensaje */}
                <motion.p
                    className="text-white text-lg md:text-xl max-w-2xl mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    La página que estás buscando no existe. Puede que haya sido eliminada o que la dirección sea incorrecta.
                </motion.p>

                {/* Botón de regreso */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
                    >
                        Volver al inicio
                    </Link>
                </motion.div>

            </div>
        </main>
    );
};

export default NotFoundComponent;
