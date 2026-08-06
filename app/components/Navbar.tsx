"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);








  return (
    
<motion.nav

initial={{
y:-80,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:0.6
}}

className="..."
>
    
      <motion.nav
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-slate-900/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
    `}
>

<div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

    {/* Logo */}
    <h1 className="text-2xl font-black tracking-tight">
  <span className="text-white">Omar</span>
  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
    .dev
  </span>
</h1>

    {/* Links */}
    <div className="flex gap-8">
          <a
  href="#"
  className="
    relative
    text-gray-300
    hover:text-white
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-violet-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  Inicio
</a>
          <a
  href="#"
  className="
    relative
    text-gray-300
    hover:text-white
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-violet-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  Servicios
</a>
          <a
  href="#"
  className="
    relative
    text-gray-300
    hover:text-white
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-violet-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  Proyectos
</a>
          <a
  href="#"
  className="
    relative
    text-gray-300
    hover:text-white
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-violet-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  Contacto
</a>
            <a
  href="#"
  className="
    relative
    text-gray-300
    hover:text-white
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-violet-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  Contacto
</a>
<a href="#telecomunicaciones">
  Telecomunicaciones
</a>






        </div>
</div>
        

        

      </motion.nav>

</motion.nav>
  );
}
