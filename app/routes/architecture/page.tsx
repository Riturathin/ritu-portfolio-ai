"use client";

import { motion } from "framer-motion";

export default function Architecture() {
    return (
        <div className="bg-[#0a0f1c] text-white">

            {/* ================= HERO ================= */}
            <section className="border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-28">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight"
                    >
                        Frontend Architecture Philosophy
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="mt-8 text-white/60 text-lg max-w-3xl leading-relaxed"
                    >
                        I design frontend platforms the way backend systems are designed —
                        structured, measurable, modular, and scalable. Architecture is not
                        about frameworks. It is about decisions that survive scale.
                    </motion.p>
                </div>
            </section>

            {/* ================= LAYERED ARCHITECTURE SVG ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28">
                <h2 className="text-3xl font-semibold mb-16">
                    Layered System Architecture
                </h2>

                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-16 overflow-hidden">
                    <svg viewBox="0 0 800 400" className="w-full h-auto">

                        {[
                            { y: 50, label: "Presentation Layer" },
                            { y: 130, label: "Domain & State Layer" },
                            { y: 210, label: "Integration Layer" },
                            { y: 290, label: "AI & Data Layer" },
                        ].map((layer, i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <rect
                                    x="100"
                                    y={layer.y}
                                    width="600"
                                    height="50"
                                    rx="12"
                                    fill="rgba(59,130,246,0.08)"
                                    stroke="rgba(59,130,246,0.4)"
                                />
                                <text
                                    x="400"
                                    y={layer.y + 32}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="16"
                                >
                                    {layer.label}
                                </text>
                            </motion.g>
                        ))}
                    </svg>
                </div>
            </section>

            {/* ================= AI SYSTEM FLOW ================= */}
            <section className="border-y border-white/5 bg-white/5">
                <div className="max-w-6xl mx-auto px-6 py-28">

                    <h2 className="text-3xl font-semibold mb-16">
                        AI System Flow (RAG Architecture)
                    </h2>

                    <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">

                        {["User UI", "Vector Database", "LLM Engine", "Response Layer"].map(
                            (node, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="
                    relative
                    bg-[#0f172a]
                    border border-white/10
                    px-8 py-6
                    rounded-xl
                    text-center
                    w-52
                  "
                                >
                                    {node}

                                    <motion.div
                                        className="absolute inset-0 rounded-xl border border-blue-500/40"
                                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    />
                                </motion.div>
                            )
                        )}

                    </div>

                    <motion.div
                        className="mt-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                        style={{ transformOrigin: "left" }}
                    />
                </div>
            </section>

            {/* ================= REAL ARCHITECTURAL DECISIONS ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28">

                <h2 className="text-3xl font-semibold mb-16">
                    Real-World Architectural Decisions
                </h2>

                <div className="space-y-16">

                    {[
                        {
                            title: "Micro-Frontend Strategy",
                            content:
                                "Designed independently deployable frontend domains to eliminate release coupling and increase team autonomy. Established shared contracts and versioning policies to maintain cross-team integrity.",
                        },
                        {
                            title: "Performance Budget Governance",
                            content:
                                "Defined measurable bundle size limits, lazy-loading strategies, and runtime monitoring to maintain performance consistency at enterprise scale.",
                        },
                        {
                            title: "State & Domain Separation",
                            content:
                                "Implemented domain-driven state isolation to reduce cognitive load and prevent implicit coupling across large codebases.",
                        },
                        {
                            title: "AI Production Readiness",
                            content:
                                "Implemented RAG systems using structured document chunking, vector search, and strict prompt constraints to prevent hallucination and ensure reliability.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="border-l-2 border-blue-500/40 pl-8">
                            <h3 className="text-xl font-semibold text-blue-400">
                                {item.title}
                            </h3>
                            <p className="mt-4 text-white/60 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= DECISION FRAMEWORK ================= */}
            <section className="border-y border-white/5 bg-[#0f172a]">
                <div className="max-w-6xl mx-auto px-6 py-28">

                    <h2 className="text-3xl font-semibold mb-16">
                        Architecture Decision Framework
                    </h2>

                    <ul className="space-y-6 text-white/70 text-lg leading-relaxed list-disc pl-6">
                        <li>Favor composability over abstraction.</li>
                        <li>Optimize for maintainability before premature optimization.</li>
                        <li>Every architectural decision must be measurable.</li>
                        <li>Minimize long-term cognitive load for future engineers.</li>
                        <li>Design systems that scale teams, not just traffic.</li>
                    </ul>

                </div>
            </section>

            {/* ================= SCALING TEAMS ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28">

                <h2 className="text-3xl font-semibold mb-16">
                    Scaling Engineering Organizations
                </h2>

                <p className="text-white/60 text-lg leading-relaxed max-w-4xl">
                    Architecture is a force multiplier. By defining domain boundaries,
                    reusable UI systems, shared contracts, and deployment independence,
                    engineering velocity increases without proportional complexity growth.
                    Strong architectural foundations enable predictable scaling across
                    teams and product surfaces.
                </p>

            </section>

        </div>
    );
}