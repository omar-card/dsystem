"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-36 px-8"
    >
      {/* Glow de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-violet-400 mb-4">
            Contacto
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-8 leading-8">
            Estoy disponible para desarrollar sitios web modernos,
            optimizar tu presencia en Internet, mejorar la infraestructura
            tecnológica de tu empresa o ayudarte a crear una solución a medida.
          </p>
        </motion.div>

        {/* Tarjeta principal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            lg:p-14
          "
        >

          <div className="grid lg:grid-cols-2 gap-14">

            {/* Información */}
            <div>

              <h3 className="text-3xl font-bold mb-8">
                Hablemos.
              </h3>

              <div className="space-y-8">

                <div className="flex items-start gap-5">
                  <div className="text-3xl">📧</div>

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                      Correo
                    </p>

                    <a
                      href="mailto:omarcardev@gmail.com"
                      className="text-lg hover:text-violet-400 transition"
                    >
                      omarcardev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-3xl">📱</div>

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                      WhatsApp
                    </p>

                    <a
                      href="https://wa.me/573156822788"
                      className="text-lg hover:text-violet-400 transition"
                    >
                      +57 315 682 2788
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-3xl">💼</div>

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                      LinkedIn
                    </p>

                    <a
                      href="#"
                      className="text-lg hover:text-violet-400 transition"
                    >
                    linkedin/omar-manuel-cardenas-lara
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-3xl">🐙</div>

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                      GitHub
                    </p>

                    <a
                      href="#"
                      className="text-lg hover:text-violet-400 transition"
                    >
                      github.com/omar-card
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* CTA */}
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-violet-500/10
                via-transparent
                to-cyan-500/10
                p-10
                flex
                flex-col
                justify-center
              "
            >

              <h3 className="text-3xl font-bold leading-tight">
                Construyamos algo increíble juntos.
              </h3>

              <p className="text-gray-400 leading-8 mt-6">
                Si tienes una idea, un negocio o un proyecto que quieras llevar
                al siguiente nivel, estaré encantado de ayudarte.
              </p>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
                href="https://wa.me/573156822788"
                className="
                  mt-10
                  inline-flex
                  justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-500
                  to-cyan-500
                  px-8
                  py-4
                  font-semibold
                  shadow-lg
                  shadow-violet-500/20
                "
              >
                🚀 Agendar una reunión
              </motion.a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
