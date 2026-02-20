"use client";

import { motion } from "framer-motion";
import AuthorityBanner from "@/components/AuthorityBanner";
import DisplayableContent from "@/components/DisplayableContent";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1c]">

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid-bg" />
        </div>

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.25),transparent_50%)]" />

        <div className="relative px-12 md:px-24 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white"
          >
            Staff Engineer —
            <br />
            Frontend Architecture
            <br />
            & AI Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-10 text-xl text-white/70 max-w-2xl"
          >
            Designing scalable frontend platforms and AI-integrated systems
            across enterprise environments.
          </motion.p>

        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
      </section>

      {/* Main section between hero and banner */}
      <AuthorityBanner />

      <DisplayableContent
        title="Building systems that scale."
        description="From micro-frontend architecture to AI-powered workflows, I design frontend platforms that remain maintainable, performant, and extensible at enterprise scale."
      >
        <Link
          href="/routes/architecture"
          className="
    block
    bg-white/5
    border border-white/10
    rounded-2xl
    p-6
    hover:bg-white/10
    hover:scale-[1.02]
    transition-all duration-300
    group
  "
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Explore Architecture
            </h3>
            <span className="text-white/40 group-hover:translate-x-1 transition">
              →
            </span>
          </div>
          <p className="text-white/50 mt-2">
            See how systems are structured, scaled, and optimized.
          </p>
        </Link>

        <Link
          href="/routes/ai-integration"
          className="
    block
    bg-white/5
    border border-white/10
    rounded-2xl
    p-6
    hover:bg-white/10
    hover:scale-[1.02]
    transition-all duration-300
    group
  "
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              AI Integration Strategy
            </h3>
            <span className="text-white/40 group-hover:translate-x-1 transition">
              →
            </span>
          </div>
          <p className="text-white/50 mt-2">
            Practical RAG implementations and cost-optimized AI systems.
          </p>
        </Link>
      </DisplayableContent>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-8 text-white">
          Core Impact
        </h2>
        <ul className="space-y-4 text-white/60 text-lg">
          <li>Led frontend architecture for enterprise-scale systems</li>
          <li>Improved performance by 35% through system-level optimization</li>
          <li>Designed modular React + TypeScript frameworks</li>
          <li>Built RAG-based AI assistants with vector search</li>
        </ul>
      </section>

    </div>
  );
}