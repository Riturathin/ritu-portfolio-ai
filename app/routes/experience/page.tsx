"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experienceData } from "@/config/experience";

export default function Experience() {
    const [expanded, setExpanded] = useState<number | null>(0);

    // Split data
    const seniorRoles = experienceData.filter(
        (exp) => !exp.period.includes("2012") &&
            !exp.period.includes("2014") &&
            !exp.period.includes("2015") &&
            !exp.period.includes("2016")
    );

    const foundationRoles = experienceData.filter(
        (exp) =>
            exp.period.includes("2012") ||
            exp.period.includes("2014") ||
            exp.period.includes("2015") ||
            exp.period.includes("2016")
    );

    return (
        <div className="bg-[#0a0f1c] text-white relative">

            {/* ================= HEADER ================= */}
            <section className="border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-28">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Experience & Platform Leadership
                    </h1>
                    <p className="mt-8 text-white/60 text-lg max-w-3xl leading-relaxed">
                        From enterprise platform governance to AI-native frontend systems,
                        this journey reflects architectural ownership at scale.
                    </p>
                </div>
            </section>

            {/* ================= SENIOR & STAFF ROLES ================= */}
            <SectionBlock
                title="Platform & Staff Leadership"
                roles={seniorRoles}
                expanded={expanded}
                setExpanded={setExpanded}
            />

            {/* ================= FOUNDATION YEARS ================= */}
            <section className="border-t border-white/5 bg-[#0f172a]">
                <div className="max-w-6xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                        Foundation Years (2012–2018)
                    </h2>
                    <p className="text-white/60 mb-16 max-w-3xl">
                        Built high-scale consumer and enterprise systems across ecommerce,
                        SaaS, and travel platforms — establishing production-grade
                        frontend engineering foundations.
                    </p>
                </div>
            </section>

            <SectionBlock
                roles={foundationRoles}
                expanded={expanded}
                setExpanded={setExpanded}
            />

        </div>
    );
}

function SectionBlock({
    title,
    roles,
    expanded,
    setExpanded,
}: any) {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-28">

            {title && (
                <h2 className="text-3xl font-semibold mb-20">
                    {title}
                </h2>
            )}

            <div className="space-y-28">

                {roles.map((exp: any, index: number) => {
                    const isExpanded = expanded === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
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
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {exp.role}
                                    </h3>
                                    <p className="text-blue-400 mt-2">
                                        {exp.company}
                                    </p>
                                    <p className="text-white/50 mt-1">
                                        {exp.period}
                                    </p>
                                    <p className="text-white/60 mt-4">
                                        {exp.positioning}
                                    </p>
                                </div>

                                <div className="text-blue-400 text-xl">
                                    {isExpanded ? "−" : "+"}
                                </div>
                            </div>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="overflow-hidden mt-10"
                                    >
                                        {exp.highlights && (
                                            <Section
                                                title="Key Contributions"
                                                items={exp.highlights}
                                            />
                                        )}

                                        {exp.metrics && (
                                            <Section
                                                title="Measurable Impact"
                                                items={exp.metrics}
                                            />
                                        )}

                                        {exp.themes && (
                                            <Section
                                                title="Architecture Themes"
                                                items={exp.themes}
                                            />
                                        )}

                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

function Section({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div className="mt-10">
            <h4 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
                {title}
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-white/70 leading-relaxed">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}