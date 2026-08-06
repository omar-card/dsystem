
"use client";

import { motion } from "framer-motion";



import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stast";
import Telecommunications from "./components/Telecommunications";

export default function Home() {
  return (
    <main 
      className="
      relative
      overflow-hidden
      min-h-screen
      text-white
      bg-[#0A0A0A]
      bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
      bg-[size:50px_50px]
      "
      style={{
        background:
          "radial-gradient(circle at top, #1e293b 0%, #0f172a 35%, #020617 100%)",
        }}
  >
    
      <Navbar />
      <Hero />
      <Services />
      <Telecommunications />
      <Projects />
      <About />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}




