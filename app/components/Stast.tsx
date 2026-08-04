"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "+3",
    label: "Proyectos desarrollados",
  },
  {
    number: "+6",
    label: "Tecnologías principales",
  },
  {
    number: "100%",
    label: "Compromiso con cada proyecto",
  },
  {
    number: "24/7",
    label: "Aprendizaje continuo",
  },
];

export default function Stats() {
  return (
    <section className="relative py-28 px-8 overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-400 mb-4">
            Mi trabajo
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Resultados que hablan por sí solos
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Cada proyecto representa una oportunidad para crear soluciones
            modernas, rápidas y enfocadas en generar valor real.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                text-center
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
              "
            >
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}