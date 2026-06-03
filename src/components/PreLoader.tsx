import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function PreLoader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 600); }
      setPct(Math.floor(p));
    }, 140);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            className="absolute inset-0 grid-bg opacity-40"
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.18),transparent_60%)]" />

          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-center gap-4 mb-12"
          >
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-loopin relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-2 rounded-full bg-loopin animate-pulse-glow" />
            </motion.div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: 60 }} animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-5xl md:text-7xl font-light tracking-tight text-shimmer"
              >
                Loopin
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative z-10 w-64 md:w-96"
          >
            <div className="h-px bg-white/10 overflow-hidden">
              <motion.div className="h-full bg-loopin" style={{ width: `${pct}%` }} />
            </div>
            <div className="flex justify-between text-xs mt-3 text-white/50 font-mono">
              <span>LOADING EXPERIENCE</span>
              <span className="text-loopin">{String(pct).padStart(3, "0")}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
