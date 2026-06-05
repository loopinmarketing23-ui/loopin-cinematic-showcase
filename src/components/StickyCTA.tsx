import { motion, useScroll, useTransform } from "motion/react";

export function StickyCTA() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.9, 0.95], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.2], [40, 0]);

  return (
    <motion.button
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      style={{ opacity, y }}
      className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-loopin text-black text-sm font-semibold shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 transition-transform"
    >
      <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
      Lets Build Your Brand →
    </motion.button>
  );
}
