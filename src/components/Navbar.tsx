'use client'
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  // Estado para saber qué link tiene el mouse encima
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Prices", href: "#prices" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="relative z-30 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="#A78BFA"/>
        </svg>
        <h1 className="text-xl font-bold tracking-tight text-white">Lumina</h1>
      </div>

      {/* Menú de Navegación Inteligente */}
      <nav className="flex items-center gap-8">
        <ul className="flex items-center relative text-xs font-semibold tracking-widest text-gray-400 uppercase">
          {links.map((link, index) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative px-4 py-2 block text-gray-400 hover:text-white transition-colors duration-300 rounded-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 🌟 EFECTO EFÍMERO: Contorno que sigue al cursor suavemente */}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navbar-hover-bg"
                    className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 rounded-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de Acción */}
      <div>
        <Link 
          href="#signup" 
          className="bg-[#c929b9] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#b01f9f] transition-all shadow-lg shadow-pink-500/20"
        >
          Start
        </Link>
      </div>
    </header>
  );
}