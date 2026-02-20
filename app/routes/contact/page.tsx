"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="bg-[#0a0f1c] text-white">

            {/* ================= HERO ================= */}
            <section className="border-b border-white/5">
                <div className="max-w-5xl mx-auto px-6 py-28">

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight"
                    >
                        Let’s Build Something Scalable
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="mt-8 text-white/60 text-lg leading-relaxed max-w-3xl"
                    >
                        Open to Staff Engineer and Frontend Architect roles where
                        architecture ownership, AI integration, and system design
                        drive product evolution.
                    </motion.p>

                </div>
            </section>

            {/* ================= CONTACT OPTIONS ================= */}
            <section className="max-w-5xl mx-auto px-6 py-28">

                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT SIDE */}
                    <div className="space-y-10">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">
                                Direct Email
                            </h3>
                            <p className="text-white/60">
                                Reach out directly for architectural discussions,
                                hiring conversations, or collaboration opportunities.
                            </p>

                            <a
                                href="mailto:riturathinsharma@gmail.com"
                                className="inline-block mt-6 text-white hover:text-blue-400 transition"
                            >
                                riturathinsharma@gmail.com →
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">
                                LinkedIn
                            </h3>
                            <p className="text-white/60">
                                For professional history, recommendations, and
                                verified work experience.
                            </p>

                            <a
                                href="https://linkedin.com/in/ritumonisarma"
                                target="_blank"
                                className="inline-block mt-6 text-white hover:text-blue-400 transition"
                            >
                                View Profile →
                            </a>
                        </motion.div>

                    </div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#0f172a] border border-white/10 rounded-2xl p-10"
                    >
                        <h3 className="text-2xl font-semibold">
                            Resume & Availability
                        </h3>

                        <p className="mt-6 text-white/60 leading-relaxed">
                            Available for high-impact frontend architecture roles,
                            platform ownership, and AI-integrated product initiatives.
                        </p>

                        <div className="mt-10 space-y-6">

                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                className="
                  block
                  text-center
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  text-white
                  py-3
                  rounded-lg
                  font-medium
                "
                            >
                                Download Resume
                            </a>

                            <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                                <p className="text-white/50 text-sm">
                                    Location
                                </p>
                                <p className="text-white mt-2">
                                    Open to India / Remote / Global Opportunities
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>

            </section>

        </div>
    );
}