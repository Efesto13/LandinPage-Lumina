'use client'
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Playground() {
  const [activeTab, setActiveTab] = useState<"code" | "visual">("visual");
  const [buttonText, setButtonText] = useState("Drag Me");
  const [justifyClass, setJustifyClass] = useState("justify-center");
  
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  // Escuchar la posición del arrastre para actualizar el código HTML/Tailwind en vivo
  useEffect(() => {
    const unsubscribe = dragX.on("change", (latest) => {
      if (latest < -60) {
        setJustifyClass("justify-start");
      } else if (latest > 60) {
        setJustifyClass("justify-end");
      } else {
        setJustifyClass("justify-center");
      }
    });
    return () => unsubscribe();
  }, [dragX]);

  // Rotación simple del texto del botón para mantenerlo dinámico
  useEffect(() => {
    const words = ["Drag Me", "Launch", "Build", "Deploy"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % words.length;
      setButtonText(words[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-[#030014] relative z-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
          True Bidirectional Sync
        </h3>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Drag the component visually or inspect the source code. The layout properties synchronize instantly.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-[#0b061f] border border-purple-500/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.05)]">
        {/* Cabecera del Editor */}
        <div className="flex justify-between items-center bg-[#070417] px-4 py-3 border-b border-purple-500/10">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="flex bg-[#0b061f] rounded-lg p-0.5 border border-purple-500/10 text-xs">
            <button 
              onClick={() => setActiveTab("visual")}
              className={`px-3 py-1 rounded-md transition-colors ${activeTab === "visual" ? "bg-purple-500/20 text-pink-400 font-bold" : "text-gray-500"}`}
            >
              Visual Canvas
            </button>
            <button 
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-md transition-colors ${activeTab === "code" ? "bg-purple-500/20 text-pink-400 font-bold" : "text-gray-500"}`}
            >
              React Code
            </button>
          </div>
        </div>

        {/* Área de Trabajo */}
        <div className="p-8 min-h-[260px] flex flex-col justify-center font-mono text-sm relative">
          {activeTab === "visual" ? (
            <div className="flex flex-col items-center gap-4 w-full">
              <span className="text-[11px] text-gray-500 font-sans mb-2 select-none">
                Grab and slide the button left or right:
              </span>
              
              {/* Contenedor del Canvas de Arrastre */}
              <div 
                ref={constraintsRef} 
                className="w-full max-w-md h-20 bg-[#070417]/50 border border-dashed border-purple-500/20 rounded-xl flex items-center px-4 overflow-hidden relative justify-center"
              >
                <motion.button 
                  drag="x"
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                  style={{ x: dragX }}
                  whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold font-sans shadow-[0_0_20px_rgba(201,41,185,0.3)] tracking-wide uppercase text-xs absolute cursor-grab select-none z-10 touch-none active:from-pink-600 active:to-purple-700"
                >
                  {buttonText}
                </motion.button>
              </div>
              
              <span className="text-[10px] text-purple-400/70 mt-2 font-mono">
                Current Flex State: <span className="text-pink-400 font-bold">{justifyClass}</span>
              </span>
            </div>
          ) : (
            /* Código Fuente React Sincronizado */
            <pre className="text-purple-300 w-full overflow-x-auto text-left max-w-md mx-auto transition-all duration-300">
              <code>
                <span className="text-gray-500">{"import { Button } from '@/components/ui';\n\n"}</span>
                <span className="text-pink-400">export default function</span> <span className="text-white">Hero()</span> {"{\n"}
                {"  "}<span className="text-pink-400">return</span> ({"\n"}
                {"    "}<span className="text-yellow-400">&lt;</span><span className="text-purple-400">div</span> <span className="text-blue-400">className</span>=<span className="text-green-300">"flex w-full {justifyClass}"</span><span className="text-yellow-400">&gt;</span>{"\n"}
                {"      "}<span className="text-yellow-400">&lt;/</span><span className="text-pink-500">Button</span><span className="text-yellow-400">&gt;</span>{"\n"}
                {"        "}<span className="text-white">{buttonText}</span>{"\n"}
                {"      "}<span className="text-yellow-400">&lt;/</span><span className="text-pink-500">Button</span><span className="text-yellow-400">&gt;</span>{"\n"}
                {"    "}<span className="text-yellow-400">&lt;/</span><span className="text-purple-400">div</span><span className="text-yellow-400">&gt;</span>{"\n"}
                {"  );\n}"}
              </code>
            </pre>
          )}
        </div>
      </div>
    </section>
  );
}