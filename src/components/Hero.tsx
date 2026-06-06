import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const services = ["Meta Ads", "Google Ads", "Social Media", "Branding", "LinkedIn Marketing", "Spotify Ads", "Ad Commercials", "SEO", "Content Creation", "Website Development"];

function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.4);
    y.set((e.clientY - r.top - r.height / 2) * 0.4);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x, y }}
      className="group relative inline-flex items-center gap-3 px-9 py-5 rounded-full bg-loopin text-black font-semibold text-base overflow-hidden animate-pulse-glow"
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
      <span className="absolute inset-0 bg-gradient-to-r from-loopin-glow to-loopin opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-loopin"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.1,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function LightStreaks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-64 bg-gradient-to-r from-transparent via-loopin to-transparent"
          style={{ top: `${15 + i * 18}%` }}
          animate={{ x: ["-30%", "130%"] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export function Hero({ ready = false }: { ready?: boolean }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotY = useTransform(mouseX, [0, 1], [-8, 8]);
  const px = useTransform(mouseX, [0, 1], [-20, 20]);
  const py = useTransform(mouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [mouseX, mouseY]);

  const reveal = {
    hidden: { y: "110%" },
    show: (i: number) => ({ y: "0%", transition: { delay: 0.3 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as const } }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(250,204,21,0.20),transparent_55%)]" style={{ x: px, y: py }} />
      <Particles />
      <LightStreaks />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center"
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-loopin/30 bg-loopin/5 text-xs uppercase tracking-[0.25em] text-loopin mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-loopin animate-pulse" />
          Loopin Marketing
        </motion.div>

        <h1 className="text-[14vw] md:text-[8vw] leading-[0.95] font-light tracking-tight">
          {["We Build Brands", "for the Modern", "Internet"].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={reveal} initial="hidden" animate="show" custom={i} className="block">
                {i === 2 ? (
                  <span className="italic font-serif text-shimmer">{line}</span>
                ) : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-10 max-w-2xl mx-auto text-base md:text-lg text-white/60 leading-relaxed"
        >
          Your customers are online. Your brand should be impossible to miss when they get there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <MagneticButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Let's Build Your Brand
          </MagneticButton>
          <span className="text-xs text-white/40 mt-2">Let's make your brand impossible to ignore.</span>
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 overflow-hidden border-y border-white/5 py-4 bg-black/30 backdrop-blur"
      >
        <div className="flex animate-ticker whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="mx-8 text-xl md:text-2xl font-light text-white/40 flex items-center gap-8">
              {s}
              <span className="w-1.5 h-1.5 rounded-full bg-loopin" />
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-xs text-white/40 flex flex-col items-center gap-2"
      >
        <span>SCROLL</span>
        <motion.div className="w-px h-12 bg-gradient-to-b from-loopin to-transparent" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: "top" }} />
      </motion.div>
    </section>
  );
}
