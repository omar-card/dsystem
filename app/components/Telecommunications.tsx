"use client";

import { motion } from "framer-motion";

type Specialty = {
  icon: string;
  title: string;
  description: string;
  skills: string[];
};

const specialties: Specialty[] = [
  {
    icon: "🌐",
    title: "Redes FTTH y XPON",
    description:
      "Experiencia práctica en despliegue, mantenimiento y diagnóstico de redes de fibra óptica para proveedores de Internet.",
    skills: [
      "FTTH",
      "GPON / XPON",
      "OLT y ONU",
      "Empalmes",
      "Cajas NAP",
      "Diseño de red",
    ],
  },
  {
    icon: "📡",
    title: "Administración de redes",
    description:
      "Configuración y optimización de infraestructura de red para garantizar conectividad, estabilidad y seguridad.",
    skills: [
      "MikroTik",
      "DHCP",
      "NAT",
      "VLAN",
      "PPPoE",
      "Firewall",
    ],
  },
  {
    icon: "🔦",
    title: "Diagnóstico en campo",
    description:
      "Localización de fallas, medición de enlaces y resolución de incidentes directamente sobre la infraestructura física.",
    skills: [
      "OTDR",
      "Medición de potencia",
      "Localización de cortes",
      "Pérdidas ópticas",
      "Conectores",
      "Mantenimiento",
    ],
  },
  {
    icon: "🖥️",
    title: "Sistemas y servidores",
    description:
      "Administración de entornos Linux y servicios tecnológicos que apoyan la operación diaria de empresas e ISPs.",
    skills: [
      "Ubuntu",
      "Linux",
      "SSH",
      "Nginx",
      "Git",
      "Automatización",
    ],
  },
  {
    icon: "⚙️",
    title: "Operación de ISPs",
    description:
      "Experiencia en procesos técnicos, administrativos y operativos para gestionar clientes y servicios de Internet.",
    skills: [
      "Gestión de clientes",
      "Facturación",
      "Suspensiones",
      "Soporte técnico",
      "Inventario de equipos",
      "Control operativo",
    ],
  },
  {
    icon: "💻",
    title: "Software para telecomunicaciones",
    description:
      "Desarrollo de herramientas que permiten automatizar tareas y mejorar la gestión de proveedores de Internet.",
    skills: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Paneles web",
      "Reportes",
      "Automatización",
    ],
  },
];

const experienceItems = [
  "Administración de una red local con cientos de usuarios.",
  "Diagnóstico y reparación de fallas en enlaces de fibra óptica.",
  "Configuración de routers, ONUs y equipos de acceso.",
  "Atención de incidentes técnicos y recuperación del servicio.",
  "Automatización de procesos administrativos para ISPs.",
  "Desarrollo de soluciones web adaptadas a operaciones reales.",
];

export default function Telecommunications() {
  return (
    <section
      id="telecomunicaciones"
      className="relative overflow-hidden px-6 py-32 md:px-8"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-52 top-20 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute -right-52 bottom-10 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[160px]" />

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

      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Telecomunicaciones
          </p>

          <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Experiencia técnica desde el software hasta la{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              infraestructura de red.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Mi experiencia combina telemática, informática y
            telecomunicaciones. Trabajo directamente con redes FTTH, equipos de
            acceso, infraestructura ISP, sistemas Linux y desarrollo de
            herramientas para resolver problemas operativos reales.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty, index) => (
            <motion.article
              key={specialty.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >
              {/* Brillo interno */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-violet-400/20" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{
                    rotate: [0, -6, 6, 0],
                    scale: 1.12,
                  }}
                  transition={{ duration: 0.45 }}
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    text-4xl
                  "
                >
                  {specialty.icon}
                </motion.div>

                <div className="my-6 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

                <h3 className="text-2xl font-bold text-white">
                  {specialty.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {specialty.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {specialty.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-1.5
                        text-xs
                        text-slate-300
                        transition
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-500/10
                        hover:text-cyan-200
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Experiencia en campo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-gradient-to-br
            from-violet-500/10
            via-white/[0.03]
            to-cyan-500/10
            p-8
            backdrop-blur-xl
            md:p-12
          "
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                Experiencia en campo
              </p>

              <h3 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                No trabajo únicamente desde un escritorio.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                He trabajado directamente sobre infraestructura física,
                atendiendo fallas, configurando equipos, midiendo enlaces y
                manteniendo operativa una red de telecomunicaciones.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Esta experiencia me permite comprender tanto el software como
                la red que lo soporta y desarrollar soluciones más completas,
                prácticas y adaptadas a la realidad de cada negocio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-950/30
                    p-5
                  "
                >
                  <span className="mt-1 text-cyan-400">✓</span>

                  <p className="leading-6 text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="mx-auto max-w-3xl text-2xl font-semibold leading-10 text-slate-200">
            Desarrollo soluciones entendiendo tanto la aplicación que utiliza
            el cliente como la infraestructura que mantiene su negocio
            conectado.
          </p>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-10
              inline-flex
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-[0_0_35px_rgba(59,130,246,0.25)]
            "
          >
            Hablemos de tu infraestructura
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}