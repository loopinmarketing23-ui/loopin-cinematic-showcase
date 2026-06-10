import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PreLoader } from "@/components/PreLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { StickyCTA } from "@/components/StickyCTA";
import loopinLogo from "@/assets/loopin-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loopin Marketing - We Build Brands for the Modern Internet" },
      { name: "description", content: "Loopin Marketing helps brands stand out through sharp advertising, creative storytelling, and growth strategies. Meta Ads, Google Ads, SEO, Branding & more." },
      { property: "og:title", content: "Loopin Marketing - We Build Brands for the Modern Internet" },
      { property: "og:description", content: "Sharp advertising, creative storytelling, and strategies built for real growth." },
    ],
    links: [
      { rel: "preload", as: "image", href: loopinLogo.url, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative noise">
      <PreLoader onDone={() => setReady(true)} />
      <Cursor />
      <Navbar />
      <main>
        <Hero ready={ready} />
        <Services />
        <About />
        <Contact />
      </main>
      <StickyCTA />
    </div>
  );
}
