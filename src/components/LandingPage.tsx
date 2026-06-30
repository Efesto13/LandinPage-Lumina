'use client'
import PixelSnow from "./PixelSnow";
import Playground from "./Playground"; // Ajusta la ruta de importación si es necesario
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import { MouseEvent } from "react";
import { Sparkles, CodeXml, Eye, FolderArchive, Hand, Send } from "lucide-react";
import Link from "next/link";
import Footer from "./Footer";

interface CardProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  direction?: "left" | "right";
}

// --- 1. INTERACTIVE SPOTLIGHT CARD COMPONENT ---
function SpotlightCard({ index, icon, title, description, className = "" , direction = "left" }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const backgroundLight = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(
      450px circle at ${x}px ${y}px, 
      rgba(201, 41, 185, 0.35) 0%, 
      rgba(139, 92, 246, 0.12) 40%, 
      transparent 80%
    )`
  );

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -60 : 60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

 

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className={`bg-[#0b061f] border border-purple-500/10 rounded-2xl p-8 relative overflow-hidden group hover:border-pink-500/40 hover:shadow-[0_0_35px_rgba(201,41,185,0.15)] transition-all duration-300 flex flex-col justify-between gap-6 ${className}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ background: backgroundLight }}
      />

      <div className="relative z-10 flex flex-col gap-6 w-full h-full justify-between">
        <div className="flex justify-between items-start w-full">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:shadow-[0_0_15px_rgba(201,41,185,0.3)] transition-all duration-300">
            {icon}
          </div>
          <span className="text-[10px] font-mono text-gray-600 group-hover:text-pink-400 transition-colors">
            {index}
          </span>
        </div>

        <div className="mt-4">
          <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-pink-100 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// --- 2. BENTO PRICING COMPONENT (COMING SOON VARIANT WITH SCROLL ANIMATIONS) ---
function Pricing() {
  return (
    <section id="prices" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-20 bg-[#030014]">
      
      {/* Animación de entrada para los títulos superiores */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
      >
        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight max-w-md leading-tight">
          Flexible plans for creative minds
        </h3>
        <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase border border-purple-500/20 px-3 py-1 rounded bg-[#0b061f]">
          [ PRICING ]
        </span>
      </motion.div>

      {/* Caja Bento Principal: Revelación con escalado suave y sombra interactiva */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="bg-[#0b061f] border border-pink-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(201,41,185,0.03)] flex flex-col md:flex-row gap-8 items-center justify-between group hover:border-pink-500/30 transition-all duration-500"
      >
        
        <div className="absolute top-6 right-6 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full tracking-widest animate-pulse">
          ⚡ Coming Soon
        </div>

        <div className="max-w-xl text-left">
          <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-pink-100 transition-colors duration-300">
            Production & Team features are on the way
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            We are fine-tuning our high-performance compilation infrastructure, multi-user visual canvases, and seamless enterprise GitHub workflows.
          </p>
          
          {/* Listado de características con aparición escalonada sutil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-300 font-mono">
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }} className="cursor-default select-none">• Real-time team sandbox</motion.div>
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }} className="cursor-default select-none">• Unlimited production exports</motion.div>
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }} className="cursor-default select-none">• Advanced Custom UI Kits</motion.div>
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }} className="cursor-default select-none">• Premium AWS/Vercel pipelines</motion.div>
          </div>
        </div>

        {/* Tarjeta del formulario de la Lista de Espera */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full md:w-80 bg-[#070417] border border-purple-500/10 p-6 rounded-xl flex flex-col gap-4 shadow-2xl relative z-10"
        >
          <div className="text-xs font-bold font-mono text-purple-400 uppercase tracking-wider">
            Secure early access
          </div>
          <p className="text-[11px] text-gray-500 leading-normal">
            Be the first to know when we deploy pricing tiers and get an exclusive premium discount code.
          </p>
          <div className="flex gap-2 w-full">
            <input 
              type="email" 
              placeholder="name@domain.com"
              className="flex-1 bg-[#0b061f] border border-purple-500/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 transition-colors"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c929b9] hover:bg-[#b01f9f] text-white p-2.5 rounded-lg transition-all flex items-center justify-center shadow-lg shadow-pink-500/20"
            >
              <Send size={14} />
            </motion.button>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

// --- 3. FINAL CTA COMPONENT (WITH ADVANCED MOUSE-REACTION & SCROLL GLOW) ---
function FinalCTA() {
   const url = process.env.NEXT_PUBLIC_URL_LUMINA_REGISTER as string
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-32 text-center relative z-20 bg-[#030014]">
      {/* Destello de fondo animado que parpadea y crece suavemente */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,41,185,0.12),transparent_60%)] pointer-events-none" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 40, damping: 14 }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl leading-tight">
          Ready to claim control of your frontend?
        </h3>
        <p className="text-gray-400 text-sm max-w-md">
          Join the next generation of developers who build at the speed of light without ever sacrificing clean code.
        </p>
        
        {/* Botón CTA interactivo magnético/escala */}
        <motion.button 
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(168,85,247,0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-purple-500/10"
        >
          <Link href={url}>
             Create Free Account
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
}

// --- MAIN LANDING PAGE COMPONENT ---
export default function LandingPage() {
  return (
    <div className="bg-[#030014] text-slate-100 min-h-screen w-full relative overflow-hidden">

      {/* --- HERO CONTAINER --- */}
      <div className="relative w-full h-[calc(100vh-88px)] min-h-[500px] flex flex-col justify-center items-center z-10">
        
        {/* PixelSnow Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PixelSnow
            color="#e7dde6"
            flakeSize={0.01}
            minFlakeSize={1.25}
            pixelResolution={200}
            speed={1.25}
            density={0.3}
            direction={125}
            brightness={1}
            depthFade={8}
            farPlane={20}
            gamma={0.4545}
            variant="square"
          />
        </div>

        {/* --- HERO TEXT --- */}
        <main className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white select-none max-w-4xl"
          >
            Build the visual future without losing control of your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 drop-shadow-[0_0_25px_rgba(201,41,185,0.3)]">
              Code
            </span>
          </motion.h2>
        </main>

        {/* Scroll Indicator (Hand) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500 text-[10px] tracking-widest uppercase pointer-events-none select-none z-10">
          <span className="text-gray-600 font-medium">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0], scale: [1, 0.95, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="text-pink-500 drop-shadow-[0_0_8px_rgba(201,41,185,0.5)] flex items-center justify-center"
          >
            <Hand size={20} strokeWidth={1.5} className="rotate-180" />
          </motion.div>
        </div>

      </div>

      {/* --- FEATURES SECTION (ASYMMETRIC BENTO GRID) --- */}
      <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-20 bg-[#030014]">
        
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight max-w-xl text-white leading-tight">
            Everything you need, in one place
          </h3>
          <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase border border-purple-500/20 px-3 py-1 rounded bg-[#0b061f]">
            [ 04 ]
          </span>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <SpotlightCard 
            index="01"
            icon={<Sparkles size={22} strokeWidth={1.5} />}
            title="AI page generation"
            description="Create React components or full Next.js projects from a simple prompt."
            className="md:col-span-2 h-[260px]"
            direction="left"
          />

          <SpotlightCard 
            index="02"
            icon={<CodeXml size={22} strokeWidth={1.5} />}
            title="Visual Code Editor"
            description="Edit your website visually or through code with real-time synchronization."
            className="md:col-span-1 h-[260px]"
            direction="right"
          />

          <SpotlightCard 
            index="03"
            icon={<Eye size={22} strokeWidth={1.5} />}
            title="Live Preview"
            description="See every change instantly without leaving the editor canvas."
            className="md:col-span-1 h-[260px]"
            direction="left"
          />

          <SpotlightCard 
            index="04"
            icon={<FolderArchive size={22} strokeWidth={1.5} />}
            title="One-Click Export"
            description="Download production-ready React or Next.js projects as fully structured ZIP files."
            className="md:col-span-2 h-[260px]"
            direction="right"
          />
        </motion.div>
      </section>

   
      <Playground />

      
      <Pricing />

      
      <FinalCTA />

      <Footer></Footer>

    </div>
  );
}