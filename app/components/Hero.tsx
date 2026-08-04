import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
        duration: 0.8,
        ease: "easeOut"
        }}
        className="
        relative
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        text-center
        min-h-screen
        pt-20
        px-8
        "
        >


          <NetworkBackground />




        <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2
        w-[1000px] h-[700px]
        bg-blue-500/20
        blur-[180px]
        rounded-full
        -z-10"></div>    


        <div className="absolute top-20 right-20
        w-[450px] h-[450px]
        bg-violet-500/10
        blur-[150px]
        rounded-full
        -z-10"></div>   


    




        <p className="relative z-10 text-purple-400 text-lg mb-4">
          Hola, soy Omar Cárdenas 👋
        </p>
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl text-center text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
        >
        Transformo{" "}
        <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            ideas
        </span>{" "}
        en soluciones digitales que generan{" "}
        <span className="text-violet-300">resultados.</span>
        </motion.h1>

{/* Tecnologías / Servicios */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.5,
    duration: 0.8,
  }}
  className="flex flex-wrap justify-center gap-4 mt-10"
>
  {[
    "🌐 Desarrollo Web",
    "📈 SEO",
    "📡 Redes",
    "💡 Automatización",
    "🖥️ Infraestructura",
    "⚡ Soluciones ISP",
  ].map((item) => (
    <span
      key={item}
      className="
        px-5
        py-2
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        text-gray-300
        text-sm
        hover:border-violet-500/40
        hover:bg-violet-500/10
        hover:text-white
        transition-all
        duration-300
      "
    >
      {item}
    </span>
  ))}
</motion.div>

{/* Botones */}
<div className="mt-12 flex flex-wrap justify-center gap-5">

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    href="#proyectos"
  >
    <button
      className="
        px-8
        py-4
        rounded-xl
        font-semibold
        bg-gradient-to-r
        from-violet-600
        via-purple-500
        to-blue-500
        shadow-lg
        shadow-violet-500/30
        hover:shadow-blue-500/40
        transition-all
        duration-300
      "
    >
      🚀 Ver proyectos
    </button>
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    href="#contacto"
  >
    <button
      className="
        px-8
        py-4
        rounded-xl
        font-semibold
        border
        border-white/15
        bg-white/5
        backdrop-blur-md
        hover:bg-white/10
        hover:border-violet-400
        transition-all
        duration-300
      "
    >
      📩 Contáctame
    </button>
  </motion.a>

</div>

{/* Esfera tecnológica */}
<motion.div
  animate={{
    y: [0, -15, 0],
    scale: [1, 1.03, 1],
    rotate: [0, 8, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    -right-48
    top-1/2
    -translate-y-1/2

    w-[550px]
    h-[550px]

    rounded-full

    bg-gradient-to-br
    from-violet-500/20
    via-blue-500/20
    to-cyan-400/20

    border
    border-white/10

    blur-sm

    -z-10
"
/>

<div
  className="
    absolute
    -right-56
    top-1/2
    -translate-y-1/2

    w-[700px]
    h-[700px]

    rounded-full

    bg-blue-500/10

    blur-[160px]

    -z-20
"
/>


      </motion.section>
  );
}
