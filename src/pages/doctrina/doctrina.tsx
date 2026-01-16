import { motion, useScroll, useTransform } from "framer-motion";
import imgDoctrina from "@/assets/img/doctrina.jpeg";
import imgCristocentrica from "@/assets/img/cristocentrica.jpg";
import imgLectura from "@/assets/img/lectura.jpg";
import imgOracion from "@/assets/img/oracion.jpg";
import imgBiblia from "@/assets/img/biblia.jpg";
import imgAlabanza from "@/assets/img/alabanza.jpg";
import imgEspiritual from "@/assets/img/espiritual.jpg";

const doctrinas = [
    { title: "Iglesia Cristocéntrica", description: "Creemos que Jesucristo es el centro de nuestra fe, vida y enseñanza, y que toda doctrina debe apuntar a Él.", image: imgCristocentrica },
    { title: "Lectura Bíblica", description: "La Biblia es la Palabra inspirada de Dios y la base de nuestra enseñanza y práctica cristiana.", image: imgLectura },
    { title: "Oración", description: "La oración es esencial para mantener una relación viva con Dios y buscar Su voluntad.", image: imgOracion },
    { title: "Teología", description: "Estudiamos y enseñamos una teología bíblica sana, fiel a las Escrituras.", image: imgBiblia },
    { title: "Música", description: "Nuestra adoración musical glorifica a Dios y está alineada con la verdad bíblica.", image: imgAlabanza },
    { title: "Vida Espiritual", description: "Promovemos una vida espiritual activa que refleje el carácter de Cristo en nuestro diario vivir.", image: imgEspiritual },
];

const DoctrinaComponent = () => {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
    const backgroundScale = useTransform(scrollY, [0, 500], [1.05, 1]);

    return (
        <main className="w-full overflow-x-hidden">
            {/* HERO con PARALLAX */}
            <section className="relative h-[70vh] overflow-hidden pt-[72px]">
                {/* pt-[72px] = altura del header fijo */}

                {/* Imagen de fondo parallax */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${imgDoctrina}')`,
                        y: backgroundY,
                        scale: backgroundScale,
                    }}
                />

                {/* Overlay azul */}
                <div className="absolute inset-0 bg-blue-900/80 z-10"/>

                {/* Contenido */}
                <div className="relative z-20 flex items-center justify-center h-full px-4">
                    <motion.h1
                        className="text-white text-4xl md:text-5xl font-bold text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nuestra Doctrina
                    </motion.h1>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="py-24 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
                    {/* Línea vertical */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/30 hidden md:block"/>

                    <div className="flex flex-col gap-20">
                        {doctrinas.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <motion.div
                                    key={item.title}
                                    className={`flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""} items-center gap-8`}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Imagen */}
                                    <motion.div
                                        className="w-full md:w-1/2"
                                        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-2xl shadow-lg w-full h-[280px] object-cover"
                                        />
                                    </motion.div>

                                    {/* Contenido */}
                                    <motion.div
                                        className="w-full md:w-1/2 p-8 rounded-2xl relative"
                                        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {/* Punto central */}
                                        <span className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-900 rounded-full border-4 border-white"/>

                                        <h3 className="py-4 text-2xl font-semibold mb-4 text-blue-900">{item.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DoctrinaComponent;
