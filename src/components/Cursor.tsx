import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 30, mass: 0.4 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, input, textarea, select, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
    >
      <motion.div
        animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.4 : 1 }}
        className="w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-loopin"
        style={{ boxShadow: "0 0 20px rgba(250,204,21,0.7)" }}
      />
    </motion.div>
  );
}
