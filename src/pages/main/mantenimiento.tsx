import { motion, useScroll, useTransform } from "framer-motion";
import { FaTools } from "react-icons/fa";
import bgMantenimiento from "@/assets/img/doctrina.jpeg"; // tu imagen de fondo

const MantenimientoComponent = () => {
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
                    backgroundImage: `url('${bgMantenimiento}')`,
                    y: backgroundY,
                    scale: backgroundScale,
                }}
            />

            {/* Overlay azul semitransparente */}
            <div className="absolute inset-0 bg-gray-900/90" />

            {/* Contenido central */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
                {/* Icono grande */}
                <motion.div
                    className="text-white mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <FaTools size={100} />
                </motion.div>

                {/* Título */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Página en Mantenimiento
                </motion.h1>

                {/* Descripción */}
                <motion.p
                    className="text-white text-lg md:text-xl max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Lo sentimos, estamos realizando mejoras en el sitio. Pronto volveremos con una experiencia mejorada. ¡Gracias por tu paciencia!
                </motion.p>
            </div>
        </main>
    );
};

export default MantenimientoComponent;
