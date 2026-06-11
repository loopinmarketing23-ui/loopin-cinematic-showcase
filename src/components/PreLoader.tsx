import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
const loopinLogo = { url: "/loopin-logo.png" };

export function PreLoader({ onDone }: { onDone?: () => void }) {
  const seen = typeof window !== "undefined" && sessionStorage.getItem("loopin_seen") === "1";
  const [done, setDone] = useState(seen);
  const [pct, setPct] = useState(seen ? 100 : 0);

  useEffect(() => {
    if (seen) {
      onDone?.();
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 28 + 14;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          onDone?.();
          setDone(true);
          try { sessionStorage.setItem("loopin_seen", "1"); } catch {}
        }, 250);
      }
      setPct(Math.floor(p));
    }, 70);
    return () => clearInterval(id);
  }, [onDone, seen]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            className="absolute inset-0 grid-bg opacity-40"
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.18),transparent_60%)]" />

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center mb-12"
          >
            <motion.img
              src={loopinLogo.url}
              alt="Loopin Marketing"
              className="w-48 md:w-64 h-auto drop-shadow-[0_0_40px_rgba(250,204,21,0.45)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
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
