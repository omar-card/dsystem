"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const nodes = [
  { x: "84%", y: "12%" },
  { x: "91%", y: "18%" },
  { x: "97%", y: "26%" },
  { x: "82%", y: "32%" },
  { x: "89%", y: "39%" },
  { x: "96%", y: "47%" },
  { x: "79%", y: "55%" },
  { x: "87%", y: "62%" },
  { x: "95%", y: "70%" },
  { x: "83%", y: "78%" },
  { x: "74%", y: "20%" },
  { x: "77%", y: "36%" },
  { x: "73%", y: "48%" },
  { x: "71%", y: "64%" },
  { x: "76%", y: "74%" },
  { x: "92%", y: "10%" },
  { x: "99%", y: "37%" },
  { x: "100%", y: "58%" },
  { x: "90%", y: "84%" },
  { x: "80%", y: "88%" },
];

const lines = [
  { x1: "84%", y1: "12%", x2: "91%", y2: "18%" },
  { x1: "91%", y1: "18%", x2: "97%", y2: "26%" },
  { x1: "97%", y1: "26%", x2: "89%", y2: "39%" },
  { x1: "89%", y1: "39%", x2: "96%", y2: "47%" },
  { x1: "96%", y1: "47%", x2: "95%", y2: "70%" },
  { x1: "95%", y1: "70%", x2: "90%", y2: "84%" },
  { x1: "74%", y1: "20%", x2: "82%", y2: "32%" },
  { x1: "82%", y1: "32%", x2: "77%", y2: "36%" },
  { x1: "77%", y1: "36%", x2: "73%", y2: "48%" },
  { x1: "73%", y1: "48%", x2: "79%", y2: "55%" },
  { x1: "79%", y1: "55%", x2: "87%", y2: "62%" },
  { x1: "87%", y1: "62%", x2: "76%", y2: "74%" },
  { x1: "89%", y1: "39%", x2: "79%", y2: "55%" },
  { x1: "82%", y1: "32%", x2: "96%", y2: "47%" },
];

export default function NetworkBackground() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Luz que sigue el mouse */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full blur-[120px] bg-cyan-400/20"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Partículas */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.4,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Líneas */}
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(59,130,246,.25)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.15,
            }}
          />
        ))}
      </svg>

      {/* Nodos */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}