'use client'
import { motion } from "framer-motion";

export default function Footer() {
  // Configuración de variantes para una animación escalonada (Staggered)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 60, damping: 14 } 
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#030014] border-t border-purple-500/10 relative z-20 overflow-hidden">
      {/* Glow de fondo sutil en las esquinas */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(201,41,185,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Grid de Contenido Principal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 pb-12 border-b border-purple-500/10"
        >
          {/* Columna 1: Marca & Branding */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-4">
            <div className="text-xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-sans">
                Lumina
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              {/* [ESPACIO: Descripción corta de la empresa/visión] */}
              The next-generation visual coding engine. Empowering creators to structure layouts dynamically without losing control of their production-ready React tree.
            </p>
            
            {/* Estado de la plataforma o indicador en tiempo real */}
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                {/* [ESPACIO: Status del sistema u operaciones] */}
                All systems operational
              </span>
            </div>
          </motion.div>

          {/* Columna 2: Producto */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h5 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-widest">
              Product
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans">
              {/* [ESPACIO: Enlaces de Producto] */}
              <li><a href="#features" className="hover:text-pink-400 transition-colors duration-200">Features</a></li>
              <li><a href="#playground" className="hover:text-pink-400 transition-colors duration-200">Playground</a></li>
              <li><a href="#prices" className="hover:text-pink-400 transition-colors duration-200">Pricing</a></li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">Changelog</a>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-pink-500/10 border border-pink-500/20 text-pink-400">v2.0</span>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3: Desarrolladores / Recursos */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h5 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-widest">
              Resources
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans">
              {/* [ESPACIO: Enlaces para Devs/Documentación] */}
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">GitHub Setup</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Community</a></li>
            </ul>
          </motion.div>

          {/* Columna 4: Compañía */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h5 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-widest">
              Company
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans">
              {/* [ESPACIO: Enlaces corporativos] */}
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Sección Inferior: Copyright & Redes Sociales */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-600 font-mono">
            {/* [ESPACIO: Ajuste del Footer Legal] */}
            &copy; 2026 Lumina. Built for digital excellence. All rights reserved.
          </p>

          {/* Redes Sociales con Micro-interacciones de Framer Motion */}
          <div className="flex items-center gap-4 text-gray-500">
            {/* [ESPACIO: Enlace utilizando GitGraphIcon] */}
            <motion.a 
              href="#" 
              target="_blank"
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-white transition-colors p-1"
              aria-label="Repository Structure"
            >
             
            </motion.a>

            {/* [ESPACIO: Enlace utilizando X] */}
            <motion.a 
              href="#" 
              target="_blank"
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-white transition-colors p-1"
              aria-label="X Profile"
            >
      
            </motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
}