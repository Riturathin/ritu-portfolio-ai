"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        title: "Enterprise Integration Platform",
        summary:
            "Architected scalable frontend platform using micro-frontends and modular domain boundaries.",
        problem:
            "Monolithic frontend created release bottlenecks and cross-team coupling.",
        solution:
            "Designed independently deployable micro-frontends with shared contracts and version governance.",
        impact:
            "Improved release velocity and reduced deployment risk across multiple teams.",
        tech: ["React", "TypeScript", "Micro-frontends", "CI/CD"],
    },
    {
        title: "Real-Time Trading UI",
        summary:
            "Designed high-frequency rendering system for real-time financial trading dashboards.",
        problem:
            "High update frequency caused UI jitter and performance degradation.",
        solution:
            "Optimized rendering pipeline with memoization strategies and granular state isolation.",
        impact:
            "Improved UI responsiveness and system stability under market volatility.",
        tech: ["React", "Performance Engineering", "WebSockets"],
    },
    {
        title: "AI-Powered Knowledge Assistant",
        summary:
            "Built production-ready RAG system integrated into frontend platform.",
        problem:
            "Users required contextual knowledge retrieval without hallucinated responses.",
        solution:
            "Implemented document chunking, embeddings, vector search, and strict prompt constraints.",
        impact:
            "Delivered grounded, context-aware responses with cost-optimized inference.",
        tech: ["OpenAI API", "Vector DB", "RAG", "Next.js"],
    },
];

export default function Projects() {
    const [expanded, setExpanded] = useState<number | null>(null);

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
                        Architectural Case Studies
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="mt-8 text-white/60 text-lg max-w-3xl leading-relaxed"
                    >
                        Selected systems demonstrating architectural ownership,
                        performance engineering, and AI integration at scale.
                    </motion.p>
                </div>
            </section>

            {/* ================= PROJECT LIST ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28 space-y-20">

                {projects.map((project, index) => {
                    const isExpanded = expanded === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-10
                backdrop-blur-md
                hover:border-blue-500/40
                transition
                cursor-pointer
              "
                            onClick={() =>
                                setExpanded(isExpanded ? null : index)
                            }
                        >
                            {/* HEADER */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                        {project.title}
                                    </h2>
                                    <p className="mt-4 text-white/60">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="text-blue-400 text-xl">
                                    {isExpanded ? "−" : "+"}
                                </div>
                            </div>

                            {/* EXPANDABLE DETAILS */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-12 space-y-10">

                                            {/* Problem */}
                                            <Section
                                                title="Problem"
                                                content={project.problem}
                                            />

                                            {/* Solution */}
                                            <Section
                                                title="Architectural Solution"
                                                content={project.solution}
                                            />

                                            {/* Impact */}
                                            <Section
                                                title="Impact"
                                                content={project.impact}
                                            />

                                            {/* Tech Stack */}
                                            <div>
                                                <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
                                                    Technology
                                                </h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.tech.map((t, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}

            </section>

        </div>
    );
}

function Section({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <div>
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
                {title}
            </h3>
            <p className="text-white/70 leading-relaxed">
                {content}
            </p>
        </div>
    );
}