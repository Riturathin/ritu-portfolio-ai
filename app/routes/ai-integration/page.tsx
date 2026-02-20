"use client";

import { motion } from "framer-motion";

export default function AIIntegration() {
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
                        AI-Native Product Architecture
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="mt-8 text-white/60 text-lg max-w-3xl leading-relaxed"
                    >
                        Designing production-grade AI systems using RAG pipelines,
                        strict prompt governance, and cost-aware orchestration.
                    </motion.p>
                </div>
            </section>

            {/* ================= RAG SYSTEM DESIGN ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28">
                <h2 className="text-3xl font-semibold mb-16">
                    Retrieval-Augmented Generation Architecture
                </h2>

                <ul className="list-disc pl-6 space-y-4 text-white/70 text-lg leading-relaxed">
                    <li>Structured document ingestion and semantic chunking.</li>
                    <li>Embedding generation using OpenAI embedding models.</li>
                    <li>Vector similarity search with relevance filtering.</li>
                    <li>Context-constrained prompt injection to eliminate hallucination.</li>
                    <li>Top-k retrieval strategy tuned for precision over verbosity.</li>
                </ul>
            </section>

            {/* ================= PROMPT ENGINEERING ================= */}
            <section className="border-y border-white/5 bg-[#0f172a]">
                <div className="max-w-6xl mx-auto px-6 py-28">
                    <h2 className="text-3xl font-semibold mb-16">
                        Prompt Engineering Mastery
                    </h2>

                    <ul className="list-disc pl-6 space-y-4 text-white/70 text-lg leading-relaxed">
                        <li>Layered system prompts enforcing deterministic response structures.</li>
                        <li>Role-based context scoping for controlled behavior.</li>
                        <li>Strict formatting rules (Question → Answer → Bullet structure).</li>
                        <li>Temperature tuning for precision-focused enterprise output.</li>
                        <li>Hard constraints preventing hallucinated data generation.</li>
                    </ul>
                </div>
            </section>

            {/* ================= FAILURE MODES ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28">
                <h2 className="text-3xl font-semibold mb-16 text-red-400">
                    AI Failure Modes & Mitigation
                </h2>

                <div className="space-y-12 text-white/70 text-lg leading-relaxed">

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Hallucinated Responses
                        </h3>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Eliminated open-ended generation via retrieval-first constraint.</li>
                            <li>Injected only verified vector-retrieved context.</li>
                            <li>Applied response boundary conditions inside system prompts.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Context Overload & Token Waste
                        </h3>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Reduced context window size via selective chunk ranking.</li>
                            <li>Trimmed unnecessary metadata injection.</li>
                            <li>Optimized token usage for cost efficiency.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Inconsistent Output Formatting
                        </h3>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Structured prompt templates enforcing predictable output schema.</li>
                            <li>Markdown-based rendering alignment.</li>
                            <li>Response validation checks before UI rendering.</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* ================= BEFORE / AFTER IMPACT ================= */}
            <section className="border-t border-white/5 bg-white/5">
                <div className="max-w-6xl mx-auto px-6 py-28">

                    <h2 className="text-3xl font-semibold mb-16 text-blue-400">
                        Measurable AI Impact
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 text-white/70 text-lg leading-relaxed">

                        {/* BEFORE */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white">
                                Before AI Integration
                            </h3>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>High customer dependency on support documentation.</li>
                                <li>Manual search through large knowledge bases.</li>
                                <li>Slow resolution of configuration-related queries.</li>
                            </ul>
                        </div>

                        {/* AFTER */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white">
                                After AI Integration
                            </h3>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>Context-aware AI assistant delivering grounded answers.</li>
                                <li>Reduced support friction through self-serve AI help.</li>
                                <li>Faster query resolution through semantic retrieval.</li>
                                <li>Improved product usability perception.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}