import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaBookOpen,
  FaBullhorn,
  FaHome,
  FaGlobeAmericas
} from "react-icons/fa";
import bgChurch from "@/assets/img/iglesia.jpg";
import logoibh from "@/assets/img/logo.png";

const PrincipalComponent = () => {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 600], [0, 200]);
  const backgroundScale = useTransform(scrollY, [0, 600], [1.05, 1]);

  return (
      <main className="w-full">
        <section className="mt-10  relative h-screen overflow-hidden">
          <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgChurch})`,
                y: backgroundY,
                scale: backgroundScale
              }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 flex items-center justify-center h-full">
            <motion.div
                className="text-center text-white max-w-3xl px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
              <img
                  src={logoibh}
                  alt="Logo Iglesia Bautista Hebron"
                  className="mx-auto mb-6 w-32 h-32"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Iglesia Bautista Hebron
              </h1>
              <p className="text-md md:text-xl">
                Somos una iglesia comprometida con la enseñanza bíblica,
                el amor al prójimo y el crecimiento espiritual de cada familia,
                caminando juntos en Cristo.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
                className="text-3xl font-bold mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              Horarios de Servicio
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { day: "Martes", text: "Culto de Oración – 7:00 PM" },
                { day: "Domingo", text: "Servicio General – 10:00 AM" }
              ].map((item, index) => (
                  <motion.div
                      key={item.day}
                      className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2">{item.day}</h3>
                    <p className="text-lg">{item.text}</p>
                  </motion.div>
              ))}
            </div>
            <motion.h2
                className="text-3xl font-semibold mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              Nuestra Ubicación
            </motion.h2>
            <motion.p
                className="mb-8 text-gray-700"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              Cerro grande zona 5, carretera a Olancho,
              frente a gasolinera Shell,
              Tegucigalpa, Honduras
            </motion.p>
            <motion.div
                className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
              <iframe
                  title="Ubicación Iglesia Bautista Hebron"
                  src="https://www.google.com/maps?q=Iglesia%20Bautista%20Hebron&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
                className="text-3xl font-bold mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              Nuestra Misión
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaBookOpen,
                  title: "Discipulado",
                  text: "Formar creyentes firmes en la Palabra de Dios y en su fe."
                },
                {
                  icon: FaBullhorn,
                  title: "Evangelismo",
                  text: "Compartir el mensaje de salvación de Jesucristo con amor."
                },
                {
                  icon: FaHome,
                  title: "Familias Consagradas",
                  text: "Fortalecer hogares cimentados en principios bíblicos."
                },
                {
                  icon: FaGlobeAmericas,
                  title: "Misiones",
                  text: "Apoyar y extender el evangelio a nivel local y mundial."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.title}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                      <div className="flex justify-center mb-6">
                        <Icon className="text-blue-900 text-6xl" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p>{item.text}</p>
                    </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
  );
};

export default PrincipalComponent;
