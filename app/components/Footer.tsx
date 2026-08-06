"use client";

import { motion } from "framer-motion";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contacto" },
  { label: "Bitácora", href: "/bitacora" },
];

const technologies = [
  "Next.js",
  "React",
  "Python",
  "Flask",
  "Linux",
  "MikroTik",
  "FTTH / XPON",
  "SEO",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/omar-card",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573156827688",
  },
  {
    label: "Correo",
    href: "mailto:omcardev@gmail.com",
  },
];

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] px-6 pb-8 pt-24 text-white">
      {/* Luces de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div
          className="
            absolute
            inset-0
            opacity-30
            [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Llamado final */}
        <motion.div
          variants={itemAnimation}
          className="
            mb-20
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
            md:p-12
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                Construyamos algo útil
              </p>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                Tecnología que conecta personas, empresas y{" "}
                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  oportunidades.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Desarrollo soluciones web, infraestructura de redes,
                automatización y estrategias digitales para empresas e ISPs.
              </p>
            </div>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                via-blue-600
                to-cyan-500
                px-8
                py-4
                font-semibold
                shadow-[0_0_35px_rgba(99,102,241,0.25)]
                transition-shadow
                duration-300
                hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]
              "
            >
              Hablemos
              <span className="ml-2 transition-transform duration-300">
                →
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Columnas */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <motion.div variants={itemAnimation} className="lg:col-span-1">
            <a href="#inicio" className="inline-flex items-center text-3xl font-black">
              <span className="text-white">D</span>

              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                System
              </span>
            </a>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Soluciones tecnológicas que combinan desarrollo web, SEO,
              telecomunicaciones, infraestructura y automatización.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                Desarrollo web
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                FTTH / XPON
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                SEO
              </span>
            </div>
          </motion.div>

          {/* Navegación */}
          <motion.div variants={itemAnimation}>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Navegación
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      text-slate-400
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    <span className="mr-0 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:mr-3 group-hover:w-5" />

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tecnologías */}
          <motion.div variants={itemAnimation}>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Tecnologías
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <motion.span
                  key={technology}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="
                    cursor-default
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-500/10
                    hover:text-cyan-200
                  "
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={itemAnimation}>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Contacto
            </h3>

            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span className="mr-3 text-violet-400">↗</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-500">Ubicación</p>

              <p className="mt-1 font-medium text-slate-300">
                Cartagena, Colombia
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                />

                Disponible para proyectos
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parte inferior */}
        <motion.div
          variants={itemAnimation}
          className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
        >
          <p>
            © {currentYear} Omar Cárdenas · DSystem. Todos los derechos
            reservados.
          </p>

          <p>
            Diseñado y desarrollado con{" "}
            <span className="text-slate-300">Next.js</span>,{" "}
            <span className="text-slate-300">React</span> y{" "}
            <span className="text-slate-300">Tailwind CSS</span>.
          </p>

          <motion.a
            href="#inicio"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-lg
              text-white
              transition
              duration-300
              hover:border-violet-400/40
              hover:bg-violet-500/10
            "
            aria-label="Volver al inicio"
          >
            ↑
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
}