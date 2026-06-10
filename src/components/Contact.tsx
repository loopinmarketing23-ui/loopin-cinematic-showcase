import { motion } from "motion/react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const serviceOptions = [
  "Consultation",
  "Social Media Marketing", "Google Ads", "Meta Ads", "Spotify Ads",
  "LinkedIn Marketing", "Branding", "Content Creation", "Website Development",
  "SEO", "Ad Commercials",
];

function FloatingInput({ label, type = "text", value, onChange, as = "input" }: { label: string; type?: string; value: string; onChange: (v: string) => void; as?: "input" | "textarea" }) {
  const [focus, setFocus] = useState(false);
  const active = focus || value.length > 0;
  const Tag: any = as;
  return (
    <div className="relative">
      <Tag
        type={type}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={as === "textarea" ? 4 : undefined}
        className="peer w-full bg-transparent border-0 border-b border-white/15 px-1 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-loopin transition-colors resize-none"
      />
      <label className={`absolute left-1 pointer-events-none transition-all duration-300 ${active ? "top-0 text-xs text-loopin" : "top-6 text-base text-white/40"}`}>
        {label}
      </label>
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-px bg-loopin origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focus ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Enquiry from ${form.name || "Website"}${form.business ? ` (${form.business})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service Interested In: ${form.service}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:loopinmarketing23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm({ name: "", business: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 8000);
  };

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/loopin.marketing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.75 6a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17.75 6z" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587780509536", icon: "M13 22v-8h3l1-4h-4V7.5C13 6.4 13.4 5.5 15 5.5h2V2.2C16.5 2.1 15.3 2 14 2c-3 0-5 1.8-5 5v3H6v4h3v8z" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/loopin-marketing", icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06A4.17 4.17 0 0 1 17.6 8.7c4.07 0 4.82 2.68 4.82 6.16V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21h-4z" },
  ];

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(250,204,21,0.12),transparent_60%)]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          eyebrow="Contact Us"
          title={<>Let's Build<br /><span className="italic font-serif text-shimmer">What's Next</span></>}
          subtitle="Whether you're looking to grow your brand, generate more leads, improve your online presence, or explore a new marketing strategy, we'd love to hear from you."
        />
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-8 text-xl md:text-2xl italic font-serif text-white/80"
        >
          Let's Turn Your Vision Into Reality
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10 mt-20">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-12 space-y-7"
          >
            <h3 className="text-2xl font-light mb-2">Start the Conversation</h3>
            <div className="grid md:grid-cols-2 gap-7">
              <FloatingInput label="Full Name" value={form.name} onChange={update("name")} />
              <FloatingInput label="Business Name" value={form.business} onChange={update("business")} />
              <FloatingInput label="Email Address" type="email" value={form.email} onChange={update("email")} />
              <FloatingInput label="Phone Number" type="tel" value={form.phone} onChange={update("phone")} />
            </div>

            <div className="relative">
              <select
                value={form.service}
                onChange={(e) => update("service")(e.target.value)}
                className="w-full appearance-none bg-transparent border-0 border-b border-white/15 px-1 pt-6 pb-2 text-white focus:outline-none focus:border-loopin transition-colors"
              >
                <option value="" className="bg-background">Select a service</option>
                {serviceOptions.map(o => <option key={o} value={o} className="bg-background">{o}</option>)}
              </select>
              <label className="absolute left-1 top-0 text-xs text-loopin pointer-events-none">Service Interested In</label>
              <span className="absolute right-1 top-6 text-loopin pointer-events-none">▾</span>
            </div>

            <FloatingInput label="Message" as="textarea" value={form.message} onChange={update("message")} />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-loopin text-black font-semibold overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-loopin-glow to-loopin opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-loopin text-base mt-2"
              >
                ✓ Thank you for filling out the form. Our team will get back to you shortly.
              </motion.p>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-loopin mb-6">Get In Touch</h3>
              <ul className="space-y-6">
                {[
                  { label: "Phone", value: "+91 93617 35234", href: "https://wa.me/919361735234" },
                  { label: "Email", value: "loopinmarketing23@gmail.com", href: "mailto:loopinmarketing23@gmail.com" },
                  { label: "Location", value: "Chennai, Tamil Nadu, India" },
                  { label: "Business Hours", value: "Monday – Saturday\n9:00 AM – 6:00 PM" },
                ].map(item => (
                  <li key={item.label}>
                    <div className="text-xs uppercase tracking-wider text-white/40 mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-lg text-white whitespace-pre-line hover:text-loopin transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-lg text-white whitespace-pre-line">{item.value}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/91"
              target="_blank" rel="noreferrer"
              className="block glass rounded-3xl p-8 group hover:border-loopin/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-loopin mb-2">WhatsApp</div>
                  <div className="text-xl text-white">Chat With Us Now</div>
                </div>
                <span className="text-3xl text-loopin transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            <div className="glass rounded-3xl p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-loopin mb-5">Follow Us</div>
              <div className="flex items-center gap-4">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="group relative w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-loopin hover:border-loopin transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-4xl md:text-6xl font-light">Ready to <span className="italic font-serif text-shimmer">Grow</span> Your Business?</h3>
          <p className="mt-6 text-white/60 text-lg">Whether you need more visibility, more leads, or a stronger brand presence, we're here to help.</p>
          <p className="mt-4 text-xl md:text-2xl italic font-serif text-white/90">Your next stage of growth starts with one conversation. Let's have it.</p>
          <button
            onClick={() => document.querySelector<HTMLInputElement>('input[type="text"]')?.focus()}
            className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-loopin text-black font-semibold hover:scale-105 transition-transform animate-pulse-glow"
          >
            Get in Touch <span>→</span>
          </button>
        </motion.div>
      </div>

      <footer className="mt-32 border-t border-white/5 pt-10 pb-8 text-center text-sm text-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Loopin Marketing. All rights reserved.</span>
          <span>Built for brands that refuse to be invisible.</span>
        </div>
      </footer>
    </section>
  );
}
