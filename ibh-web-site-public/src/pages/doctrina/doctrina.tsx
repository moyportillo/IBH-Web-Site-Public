import {motion, useScroll, useTransform} from "framer-motion";

const doctrinas = [
    {
        title: "Iglesia Cristocéntrica",
        description:
            "Creemos que Jesucristo es el centro de nuestra fe, vida y enseñanza, y que toda doctrina debe apuntar a Él.",
        image: "/src/assets/img/cristocentrica.jpg",
    },
    {
        title: "Lectura Bíblica",
        description:
            "La Biblia es la Palabra inspirada de Dios y la base de nuestra enseñanza y práctica cristiana.",
        image: "/src/assets/img/lectura.jpg",
    },
    {
        title: "Oración",
        description:
            "La oración es esencial para mantener una relación viva con Dios y buscar Su voluntad.",
        image: "/src/assets/img/oracion.jpg",
    },
    {
        title: "Teología",
        description:
            "Estudiamos y enseñamos una teología bíblica sana, fiel a las Escrituras.",
        image: "/src/assets/img/biblia.jpg",
    },
    {
        title: "Música basada en la Palabra de Dios",
        description:
            "Nuestra adoración musical glorifica a Dios y está alineada con la verdad bíblica.",
        image: "/src/assets/img/alabanza.jpg",
    },
    {
        title: "Vida Espiritual",
        description:
            "Promovemos una vida espiritual activa que refleje el carácter de Cristo en nuestro diario vivir.",
        image: "/src/assets/img/espiritual.jpg",
    },
];

const DoctrinaComponent = () => {
    // Hook de scroll
    const {scrollY} = useScroll();
    // Parallax: la imagen se mueve más lento que el scroll
    const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
    const backgroundScale = useTransform(scrollY, [0, 500], [1.05, 1]);

    return (
        <main className="w-full">

            {/* HERO con PARALLAX */}
            <section className="relative h-[70vh] overflow-hidden">

                {/* Imagen de fondo parallax */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/src/assets/img/doctrina.jpeg')",
                        y: backgroundY,
                        scale: backgroundScale,
                    }}
                />

                {/* Overlay azul */}
                <div className="absolute inset-0 bg-blue-900/80 z-10"/>

                {/* Contenido */}
                <div className="relative z-20 flex items-center justify-center h-full">
                    <motion.h1
                        className="text-white text-4xl md:text-5xl font-bold text-center px-4"
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        Nuestra Doctrina
                    </motion.h1>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="py-24 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 relative">

                    {/* Línea vertical */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/30 hidden md:block"/>

                    <div className="flex flex-col gap-20">
                        {doctrinas.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    className={`flex flex-col md:flex-row ${
                                        isLeft ? "md:flex-row-reverse" : ""
                                    } items-center gap-8`}
                                    initial={{opacity: 0, y: 60}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.6}}
                                >
                                    {/* Imagen */}
                                    <motion.div
                                        className="w-full md:w-1/2"
                                        initial={{opacity: 0, x: isLeft ? 60 : -60}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: true}}
                                        transition={{duration: 0.6}}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-2xl shadow-lg w-full h-[280px] object-cover"
                                        />
                                    </motion.div>

                                    {/* Contenido */}
                                    <motion.div
                                        className="w-full md:w-1/2 p-8 rounded-2xl relative bg-white shadow-lg"
                                        initial={{opacity: 0, x: isLeft ? -60 : 60}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: true}}
                                        transition={{duration: 0.6}}
                                    >
                                        {/* Punto central */}
                                        <span
                                            className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-900 rounded-full border-4 border-white"/>

                                        <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.description}
                                        </p>
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
