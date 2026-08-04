"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Sitios web rápidos, modernos, optimizados para SEO y diseñados para convertir visitantes en clientes.",
  },
  {
    icon: "📡",
    title: "Redes e Infraestructura",
    description:
      "Diseño, instalación y optimización de redes para empresas e ISPs.",
  },
  {
    icon: "📈",
    title: "SEO",
    description:
      "Posicionamiento en Google para atraer más clientes de forma orgánica.",
  },
  {
    icon: "🛡",
    title: "Seguridad Informática",
    description:
      "Protección de infraestructura, servidores y buenas prácticas para reducir riesgos.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-32 px-8 overflow-hidden"
    >
      {/* Glow de fondo */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-sm text-violet-400 mb-4"
        >
          Servicios
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Tecnología que impulsa negocios.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl text-gray-400 leading-8 mb-16"
        >
          Desarrollo soluciones digitales, infraestructura tecnológica,
          automatización y estrategias para ayudar a empresas e ISPs a crecer.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(59,130,246,0.20)]
              "
            >
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 mb-6" />

              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}