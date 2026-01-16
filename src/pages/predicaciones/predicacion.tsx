import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const mainVideoId = "l15khs6717A";

const videos = [
    "jtOtfZptASk",
    "-PdGRvXOE-M",
    "_fC_7owYP4Q",
    "7jTvxxl5tpg",
    "dFSaBYQ9JtM",
    "Oe05e09GvU4",
];

const PredicacionesComponent = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    /* Scroll solo del hero */
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    /* Efectos */
    const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

    return (
        <main className="w-full bg-white">

            {/* HERO */}
            <section
                ref={heroRef}
                className="mt-20 py-10 bg-gray-100 overflow-hidden"
            >
                <div className="max-w-5xl mx-auto px-6">

                    {/* Título */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Predicaciones
                    </motion.h1>

                    {/* Video con parallax */}
                    <motion.div
                        style={{ y, scale, opacity }}
                        className="mx-auto w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=1&rel=0`}
                            title="Predicación Principal"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OTRAS PREDICACIONES */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <motion.h2
                        className="text-3xl font-bold text-center mb-12 text-blue-900"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Predicaciones Anteriores
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {videos.map((id, index) => (
                            <motion.div
                                key={id}
                                className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${id}?rel=0`}
                                    title={`Predicación ${index + 1}`}
                                    allow="encrypted-media"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default PredicacionesComponent;
