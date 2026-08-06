"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { bitacoraEntries } from "../data/bitacora";

export default function BitacoraPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 pb-28 pt-32 text-white md:px-8">
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[160px]" />

        <div className="absolute -right-48 bottom-10 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />

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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
        >
          ← Volver al portafolio
        </Link>

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Bitácora técnica
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Experiencias, proyectos y{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              aprendizajes reales.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Un registro continuo de mi trabajo en desarrollo de software,
            Linux, redes FTTH, XPON, infraestructura, automatización y
            telecomunicaciones.
          </p>
        </motion.div>

        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[
            "Desarrollo web",
            "FTTH / XPON",
            "MikroTik",
            "Linux",
            "SEO",
            "Automatización",
          ].map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Entradas */}
        <section className="mt-20 grid gap-8">
          {bitacoraEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400/35
                hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                md:grid
                md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
              "
            >
              {/* Imagen */}
              <div className="relative min-h-[280px] overflow-hidden bg-slate-900">
                {entry.image ? (
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-500/20">
                    <span className="text-7xl">⚙️</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 backdrop-blur-md">
                  {entry.category}
                </span>
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-sm text-slate-500">{entry.date}</p>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  {entry.title}
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  {entry.summary}
                </p>

                <p className="mt-4 leading-7 text-slate-400">
                  {entry.details}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Redes */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-cyan-500/10 p-8 text-center backdrop-blur-xl md:p-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Sigue el proceso
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            También comparto avances en mis redes.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Proyectos, instalaciones, diagnósticos, aprendizajes y soluciones
            aplicadas durante mi trabajo diario.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/omar-card"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/omar-manuel-cardenas-lara-93a9803b7"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold transition hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.instagram.com/omarteleartico?igsh=bmRhOXc3OTkyMGI1"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold transition hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569521627424"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold transition hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              Facebook ↗
            </a>
             <a
              href="https://www.youtube.com/@OmarTelematico"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold transition hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              Youtube ↗
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}