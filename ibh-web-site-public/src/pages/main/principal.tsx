import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaBullhorn,
  FaHome,
  FaGlobeAmericas
} from "react-icons/fa";

/* Animaciones reutilizables */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const PrincipalComponent = () => {
  return (
    <main className="w-full">

      {/* HERO */}
      <motion.section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/src/assets/img/iglesia.jpg')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Contenido Hero */}
        <motion.div
          className="relative z-10 text-center text-white max-w-3xl px-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9 }}
        >
          <img
            src="/src/assets/img/logo.png"
            alt="Logo Iglesia Bautista Hebron"
            className="mx-auto mb-6 w-32 h-32"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Iglesia Bautista Hebron
          </h1>

          <p className="text-lg md:text-xl">
            Somos una iglesia comprometida con la enseñanza bíblica,
            el amor al prójimo y el crecimiento espiritual de cada familia,
            caminando juntos en Cristo.
          </p>
        </motion.div>
      </motion.section>

      {/* HORARIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
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
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{item.day}</h3>
                <p className="text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Ubicación */}
          <motion.h2
            className="text-3xl font-semibold mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nuestra Ubicación
          </motion.h2>

          <motion.p
            className="mb-8 text-gray-700"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Colonia Cerro grande, Zona 4, carretera a Olancho,
            frente a gasolinera Shell Cerro Grande,
            Tegucigalpa, Honduras
          </motion.p>

          <motion.div
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
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

      {/* MISIÓN */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nuestra Misión
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaHome, title: "Familias Consagradas", text: "Fortalecer hogares cimentados en principios bíblicos." },
              { icon: FaBookOpen, title: "Discipulado", text: "Formar creyentes firmes en la Palabra de Dios y en su fe." },
              { icon: FaBullhorn, title: "Evangelismo", text: "Compartir el mensaje de salvación de Jesucristo con amor." },
              { icon: FaGlobeAmericas, title: "Misiones", text: "Apoyar y extender el evangelio a nivel local y mundial." }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
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
