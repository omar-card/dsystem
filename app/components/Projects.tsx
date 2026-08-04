"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "WEB CORPORATIVA",
    title: "Bloop Dive",
    description:
      "Sitio web desarrollado para un centro de buceo en Barú, optimizado para SEO, velocidad y conversión de visitantes en clientes.",
    image: "https://picsum.photos/1200/700?random=1",
    tech: ["Next.js", "SEO", "Tailwind", "Responsive"],
    status: "En desarrollo",
    progress: 85,
  },

  {
    category: "WEB RESTAURANTE",
    title: "Rincón de Fredy",
    description:
      "Página moderna para restaurante con menú digital, integración con WhatsApp y posicionamiento en Google.",
    image: "https://picsum.photos/1200/700?random=2",
    tech: ["React", "SEO Local", "Tailwind"],
    status: "En desarrollo",
    progress: 70,
  },

  {
    category: "APLICACIÓN WEB",
    title: "Sistema de Pedidos",
    description:
      "Aplicación sencilla para registrar pedidos, administrar clientes y agilizar el proceso de venta.",
    image: "https://picsum.photos/1200/700?random=3",
    tech: ["Flask", "Python", "SQLite"],
    status: "En desarrollo",
    progress: 60,
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden py-32 px-8"
    >
      {/* Glow de fondo */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-sm text-violet-400 mb-4"
        >
          Portafolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold"
        >
          Proyectos Destacados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-gray-400 leading-8"
        >
          Algunos de los proyectos desarrollados utilizando tecnologías modernas,
          priorizando rendimiento, experiencia de usuario y resultados para el cliente.
        </motion.p>

        {/* Tarjetas */}
        <div className="mt-20 space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                lg:grid
                lg:grid-cols-2
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]
              "
            >
              {/* Imagen */}
              <div className="overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    min-h-[360px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-center p-10">

                <h3 className="text-4xl font-bold">
                  {project.title}
                </h3>

                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 mt-5 mb-7" />

                <p className="text-gray-400 leading-8">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-violet-500/20
                        bg-violet-500/10
                        px-4
                        py-2
                        text-sm
                        text-violet-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">

    <div className="flex justify-between text-sm text-gray-400 mb-2">

        <span>{project.status}</span>

        <span>{project.progress}%</span>

    </div>

    <div className="h-2 rounded-full bg-white/10 overflow-hidden">

        <motion.div

            initial={{ width: 0 }}

            whileInView={{ width: `${project.progress}%` }}

            transition={{ duration: 1 }}

            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"

        />

    </div>

</div>





                {/* Botones */}
                <div className="mt-10 flex flex-wrap gap-4">

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="#"
                    className="
                      rounded-xl
                      bg-gradient-to-r
                      from-violet-600
                      via-purple-500
                      to-cyan-500
                      px-7
                      py-3
                      font-semibold
                      shadow-lg
                      shadow-violet-500/20
                    "
                  >
                    🚀 Ver proyecto
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="#"
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-7
                      py-3
                      font-semibold
                      backdrop-blur-md
                      transition
                      hover:border-cyan-400
                    "
                  >
                    💻 Código
                  </motion.a>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}