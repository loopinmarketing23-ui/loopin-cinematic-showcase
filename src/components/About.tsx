import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";

const whyPoints = [
  { title: "Strategy Before Everything", body: "Before we write a single post or run a single ad, we build a strategy around your business, your audience, and your goals because guesswork is expensive." },
  { title: "A Specialized Team Behind Every Strategy", body: "You don't get a generalist. You get a dedicated team of specialists in paid ads, content, design, branding, and strategy - each focused on one thing: growing your business." },
  { title: "Creative with Purpose", body: "Every post, ad, and piece of content we create is designed to do one thing: make the right person stop, pay attention, and take action." },
  { title: "Results That Matter", body: "We measure what actually moves your business - visibility, leads, conversions, and customer growth. Not vanity metrics." },
  { title: "End-to-End Marketing Solutions", body: "From social media and advertising to branding and websites, we provide everything your business needs under one roof." },
  { title: "A Partner, Not Just a Service Provider", body: "We treat your business goals as our own. Your growth is our success, and we're invested in helping you get there." },
  { title: "Built for Businesses That Want to Scale", body: "Whether you're a startup finding your footing or an established business looking to grow, our strategies are built to support your next stage of growth." },
  { title: "Future-Focused Vision", body: "When you work with Loopin, you're partnering with a brand that believes in building long-term value, strong relationships, and lasting impact." },
];

function RevealText({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(" ");
  return (
    <p className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.015, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(250,204,21,0.07),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          eyebrow="About Us"
          title={<>Building More Than<br /><span className="italic font-serif text-shimmer">a Marketing Agency</span></>}
        />

        <div className="grid md:grid-cols-12 gap-10 mt-20">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-white/70">
            <RevealText>Loopin Marketing was founded with a simple belief: every great business deserves the opportunity to be seen, heard, and remembered.</RevealText>
            <RevealText>In a world where attention is limited and competition is everywhere, businesses need more than just social media posts and advertisements. They need a strategy that helps them stand out, connect with the right audience, and create lasting growth.</RevealText>
            <RevealText>That's why Loopin was started by two people who saw too many great businesses stay invisible, not because they lacked quality, but because they lacked the right strategy to be found.</RevealText>
            <RevealText>We help businesses build strong digital identities through strategy, creative storytelling, and performance marketing. From startups taking their first steps online to established businesses ready to scale, our goal is simple: help brands grow with confidence.</RevealText>
            <RevealText>Loopin started as a marketing agency. But our ambition doesn't stop there. We're building toward something bigger - one business, one partnership, one industry at a time.</RevealText>
          </div>

          <div className="md:col-span-5 md:sticky md:top-32 self-start space-y-5">
            {[
              { label: "Vision", body: "To grow Loopin from a marketing agency into a brand that builds businesses, creates opportunities, and delivers real value across industries." },
              { label: "Mission", body: "To empower businesses with strategic, effective, and growth-focused marketing solutions that help them build strong brands and achieve lasting success." },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-8 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-loopin">{c.label}</span>
                  <span className="text-2xl text-white/20 group-hover:text-loopin transition-colors">0{i + 1}</span>
                </div>
                <p className="text-white/80 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What we believe */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 md:mt-48 text-center max-w-4xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-loopin">What We Believe</span>
          <p className="mt-8 text-3xl md:text-5xl font-light leading-tight">
            We believe every business has the potential to be <span className="italic font-serif text-shimmer">remarkable</span>. Our job is to make sure the right people see it that way too.
          </p>
          <p className="mt-6 text-white/50">This belief is at the heart of everything we do at Loopin.</p>
        </motion.div>

        {/* Why */}
        <div className="mt-32 md:mt-48">
          <SectionTitle
            eyebrow="Why Loopin"
            title={<>Why Businesses<br /><span className="italic font-serif text-shimmer">Choose Loopin</span></>}
            subtitle="Most agencies deliver content. We deliver strategy, execution, and accountability - all under one roof."
          />

          <div className="grid md:grid-cols-2 gap-5 mt-16">
            {whyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-8 group relative overflow-hidden"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-loopin/0 via-loopin/0 to-loopin/0 group-hover:from-loopin/20 transition-all duration-700 pointer-events-none" />
                <div className="flex items-start gap-5 relative">
                  <span className="text-loopin font-mono text-sm pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium mb-3 group-hover:text-loopin transition-colors">{p.title}</h3>
                    <p className="text-white/60 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <p className="text-2xl md:text-4xl font-light italic font-serif text-white/90 max-w-3xl mx-auto">
              "If you're ready to grow, were ready to build with you."
            </p>
            <div className="mt-10 space-y-3 text-lg text-white/60">
              <p>Your business deserves more than visibility.</p>
              <p>It deserves a strategy that creates growth, builds trust, and drives lasting impact.</p>
              <p>Whether you're just getting started or ready to scale, Loopin is here to help you take the next step.</p>
              <p className="text-white text-xl pt-2">Let's build something people remember.</p>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-loopin text-black font-semibold hover:scale-105 transition-transform"
            >
              Get Started Today <span>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
