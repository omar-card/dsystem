"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Flask",
  "SQL",
  "SEO",
  "Linux",
  "Redes",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* FOTO */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-[35px] bg-gradient-to-br from-cyan-500/30 to-violet-600/30 blur-3xl scale-105" />

            {/* Marco */}

            <div className="
                relative
                rounded-[35px]
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-2
                shadow-2xl
            ">

              <Image
                src="/profile.png"
                alt="Omar Cárdenas"
                width={500}
                height={650}
                priority
                className="
                  rounded-[28px]
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

            </div>

          </div>
        </motion.div>

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Sobre mí
          </span>

          <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
            Desarrollo experiencias digitales
            <span className="text-cyan-400"> modernas</span>.
          </h2>

          <p className="mt-8 text-gray-300 leading-8 text-lg">
            Soy <strong>Omar Cárdenas</strong>, desarrollador web apasionado por
            construir productos rápidos, elegantes y optimizados para empresas
            que quieren destacar en Internet.

            <br />
            <br />

            Además de desarrollar aplicaciones web, tengo experiencia en
            infraestructura de redes, servidores Linux, automatización,
            optimización SEO y soluciones para proveedores de Internet (ISP).
          </p>

          {/* Skills */}

          <div className="flex flex-wrap gap-3 mt-10">

            {skills.map((skill) => (

              <span
                key={skill}
                className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    px-5
                    py-2
                    text-sm
                    text-cyan-300
                    hover:bg-cyan-500/20
                    transition
                "
              >
                {skill}
              </span>

            ))}

          </div>

          {/* Estadísticas */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h3 className="text-4xl font-bold text-white">
                3+
              </h3>
              <p className="text-gray-400 mt-2">
                Proyectos
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                100%
              </h3>
              <p className="text-gray-400 mt-2">
                Compromiso
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                ∞
              </h3>
              <p className="text-gray-400 mt-2">
                Aprendizaje
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}