import { motion } from "motion/react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const services = [
  { name: "Social Media Marketing", body: "Build a consistent and engaging presence across platforms with content and strategies designed to connect with your audience." },
  { name: "Meta Ads", body: "Reach potential customers through highly targeted Facebook and Instagram advertising campaigns that drive leads, sales, and brand awareness." },
  { name: "Google Ads", body: "Capture high-intent customers exactly when they're searching for products or services like yours." },
  { name: "Search Engine Optimization (SEO)", body: "Improve your visibility on search engines and attract organic traffic that contributes to long-term growth." },
  { name: "Branding", body: "Create a memorable identity that helps your business stand out, build trust, and leave a lasting impression." },
  { name: "Content Creation", body: "From social media content and ad creatives to videos and brand storytelling, we create content that captures attention and drives action." },
  { name: "LinkedIn Marketing", body: "Strengthen your professional presence and connect with decision-makers through strategic LinkedIn growth." },
  { name: "Spotify Ads", body: "Reach audiences through audio advertising that increases brand awareness and engagement." },
  { name: "Ad Commercials", body: "Creative commercial production designed to showcase your brand and communicate your message effectively." },
  { name: "Website Development", body: "Build fast, modern, and user-friendly websites that turn visitors into customers." },
];

export function Services() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(250,204,21,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          eyebrow="Our Services"
          title={<>End-to-End<br /><span className="italic font-serif text-shimmer">Digital Growth</span></>}
          subtitle="Whether you need a single service or a complete digital growth strategy, our solutions are designed to help your business attract, engage, and convert the right audience."
        />

        <div className="mt-20 border-t border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group relative border-b border-white/10 cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-loopin/10 via-loopin/5 to-transparent"
                initial={false}
                animate={{ opacity: hover === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-loopin origin-top"
                initial={false}
                animate={{ scaleY: hover === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6 py-8 md:py-10 px-4 md:px-8">
                <span className="text-loopin/60 font-mono text-sm w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-4xl font-light transition-all duration-500 ${hover === i ? "text-loopin translate-x-2" : ""}`}>
                    {s.name}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={{ opacity: hover === i ? 1 : 0.5, height: "auto" }}
                    className="text-white/60 mt-3 max-w-2xl leading-relaxed"
                  >
                    {s.body}
                  </motion.p>
                </div>
                <motion.span
                  animate={{ x: hover === i ? 0 : -10, opacity: hover === i ? 1 : 0.3 }}
                  className="text-3xl text-loopin"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.15),transparent_70%)]" />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-light">Need a <span className="italic font-serif text-shimmer">customized solution?</span></h3>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto">Whether you're looking for a single service or a complete growth strategy, we'll create a plan tailored to your business goals.</p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-loopin text-black font-semibold hover:scale-105 transition-transform animate-pulse-glow"
            >
              Find the Right Plan for You <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
