"use client";

import { motion } from "framer-motion";

type Project = {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  progress: number;
  demo?: string;
  github?: string;
  features?: string[];
};

const projects: Project[] = [
  {
    category: "WEB CORPORATIVA",
    title: "Bloop Dive",
    subtitle: "Sitio web para escuela y centro de buceo",
    description:
      "Sitio web corporativo para un centro de buceo ubicado en Barú. El proyecto está enfocado en mejorar la presencia digital de la empresa, facilitar el acceso a sus experiencias y aumentar su visibilidad en buscadores.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
    tech: ["WordPress", "SEO", "Responsive", "Optimización web"],
    status: "En optimización",
    progress: 85,
    demo: "https://bloopdive.com",
    features: [
      "Optimización SEO",
      "Mejora de velocidad",
      "Diseño adaptable",
      "Experiencias de buceo",
      "Estrategia de posicionamiento",
      "Optimización de conversiones",
    ],
  },
  {
    category: "APLICACIÓN WEB",
    title: "Rincón de Fredy",
    subtitle: "Sistema de gestión de pedidos para restaurante",
    description:
      "Aplicación web desarrollada para mejorar la comunicación entre el área que recibe los pedidos y la cocina. Permite registrar pedidos rápidamente, enviarlos a una pantalla independiente y controlar su estado hasta que estén listos para entregar.",
    image:"public/projects/rincon-fredy.png",
    tech: ["Flask", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    status: "Proyecto completado",
    progress: 100,
    github: "https://github.com/omar-card/rincon-fredy",
    features: [
      "Registro rápido de pedidos",
      "Pantalla independiente para cocina",
      "Actualización automática",
      "Estados pendientes, listos y despachados",
      "Notificación sonora",
      "Compatible con celulares y pantallas táctiles",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden px-6 py-32 md:px-8"
    >
      {/* Luces de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -right-48 bottom-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400"
        >
          Portafolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="text-5xl font-bold md:text-6xl"
        >
          Proyectos destacados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-400"
        >
          Soluciones creadas para resolver necesidades reales, mejorar procesos
          y fortalecer la presencia digital de empresas y negocios.
        </motion.p>

        {/* Proyectos */}
        <div className="mt-20 space-y-16">
          {projects.map((project, index) => {
            const isCompleted = project.progress === 100;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
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
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]
                  lg:grid
                  lg:grid-cols-2
                "
              >
                {/* Imagen */}
                <div className="relative min-h-[360px] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={`Vista del proyecto ${project.title}`}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/25" />

                  {/* Categoría sobre la imagen */}
                  <span
                    className="
                      absolute
                      left-6
                      top-6
                      rounded-full
                      border
                      border-white/15
                      bg-slate-950/60
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      tracking-[0.18em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                  <h3 className="text-4xl font-bold text-white">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
                      {project.subtitle}
                    </p>
                  )}

                  <div className="my-7 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400" />

                  <p className="leading-8 text-gray-400">
                    {project.description}
                  </p>

                  {/* Características */}
                  {project.features && (
                    <ul className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 text-cyan-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tecnologías */}
                  <div className="mt-8 flex flex-wrap gap-3">
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
                          transition
                          duration-300
                          hover:border-cyan-400/30
                          hover:bg-cyan-500/10
                          hover:text-cyan-200
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Estado */}
                  <div className="mt-9">
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span
                        className={`flex items-center gap-2 ${
                          isCompleted
                            ? "text-emerald-400"
                            : "text-amber-300"
                        }`}
                      >
                        <motion.span
                          animate={{
                            opacity: [0.45, 1, 0.45],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`h-2.5 w-2.5 rounded-full ${
                            isCompleted
                              ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                              : "bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.7)]"
                          }`}
                        />

                        {project.status}
                      </span>

                      <span className="text-slate-400">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${project.progress}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full ${
                          isCompleted
                            ? "bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500"
                            : "bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          rounded-xl
                          bg-gradient-to-r
                          from-violet-600
                          via-blue-600
                          to-cyan-500
                          px-7
                          py-3
                          font-semibold
                          text-white
                          shadow-lg
                          shadow-violet-500/20
                        "
                      >
                        Ver proyecto ↗
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          rounded-xl
                          border
                          border-white/15
                          bg-white/5
                          px-7
                          py-3
                          font-semibold
                          text-white
                          backdrop-blur-md
                          transition
                          duration-300
                          hover:border-cyan-400/50
                          hover:bg-cyan-500/10
                        "
                      >
                        Ver código ↗
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}