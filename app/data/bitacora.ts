export type BitacoraEntry = {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  details: string;
  image?: string;
  tags: string[];
};

export const bitacoraEntries: BitacoraEntry[] = [
  {
    id: 1,
    title: "Sistema de pedidos para Rincón de Fredy",
    date: "5 de agosto de 2026",
    category: "Desarrollo web",
    summary:
      "Finalicé una aplicación local para mejorar la comunicación entre el área de pedidos y la cocina.",
    details:
      "La aplicación permite registrar pedidos rápidamente, enviarlos a una pantalla independiente en cocina, cambiar sus estados y emitir notificaciones sonoras cuando llega un nuevo pedido.",
    image: "/projects/rincon-fredy.png",
    tags: ["Flask", "Python", "SQLite", "Restaurantes"],
  },
  {
    id: 2,
    title: "Diagnóstico de un corte de fibra con OTDR",
    date: "4 de agosto de 2026",
    category: "FTTH / XPON",
    summary:
      "Realicé una medición para localizar una falla en un enlace de fibra óptica.",
    details:
      "La traza del OTDR permitió estimar la distancia del evento y orientar la inspección física del enlace para reducir el tiempo de diagnóstico.",
      image: "/bitacora/otdr.png",
    tags: ["OTDR", "FTTH", "Fibra óptica", "Diagnóstico"],
  },
  {
    id: 3,
    title: "Publicación de mi portafolio en Vercel",
    date: "3 de agosto de 2026",
    category: "Desarrollo web",
    summary:
      "Desplegué mi portafolio desarrollado con Next.js y conecté el dominio dsystem.me.",
    details:
      "El proyecto quedó integrado con GitHub y Vercel. Cada actualización enviada al repositorio genera automáticamente una nueva versión del sitio.",
    image: "/bitacora/portafolio.png",
      tags: ["Next.js", "GitHub", "Vercel", "DNS"],
  },
];