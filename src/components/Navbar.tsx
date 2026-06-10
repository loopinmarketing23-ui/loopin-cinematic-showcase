import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import loopinLogo from "@/assets/loopin-logo.png.asset.json";

const links = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handler = () => {
      const offsets = links.map(l => {
        const el = document.getElementById(l.id);
        return { id: l.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter(o => o.top < 200).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-loopin z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          <button onClick={() => scrollTo("home")} className="flex items-center group">
            <img
              src={loopinLogo.url}
              alt="Loopin Marketing"
              className="h-20 md:h-24 w-auto transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(250,204,21,0.45)]"
            />
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="relative px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                >
                  {l.label}
                  <span
                    className={`absolute left-5 right-5 -bottom-0.5 h-px bg-loopin origin-left transition-transform duration-500 ${active === l.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-loopin text-black text-sm font-semibold hover:scale-105 transition-transform"
          >
            Let's Talk <span aria-hidden>→</span>
          </button>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-white transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </div>
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: "auto" }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <ul className="flex flex-col p-6 gap-1">
              {links.map(l => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="w-full text-left py-3 text-2xl font-light hover:text-loopin transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
              <button onClick={() => scrollTo("contact")} className="mt-4 px-5 py-3 rounded-full bg-loopin text-black font-semibold">
                Let's Talk →
              </button>
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
