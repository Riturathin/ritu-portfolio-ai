"use client";

import { motion } from "framer-motion";

export default function AuthorityBanner() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#0f172a] border-t border-white/5 border-b border-white/5"
        >
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    <div>
                        <h3 className="text-3xl font-bold text-white" >13+</h3>
                        <p className="text-sm text-white/60">
                            Years Experience
                        </p>
                    </div>

                    <div className="md:border-l md:border-gray-300">
                        <h3 className="text-3xl font-bold">Enterprise</h3>
                        <p className="text-sm text-white/60">
                            Platform Ownership
                        </p>
                    </div>

                    <div className="md:border-l md:border-gray-300">
                        <h3 className="text-3xl font-bold">Micro-Frontend</h3>
                        <p className="text-sm text-white/60">
                            Architecture
                        </p>
                    </div>

                    <div className="md:border-l md:border-gray-300">
                        <h3 className="text-3xl font-bold">AI-Integrated</h3>
                        <p className="text-sm text-white/60">
                            Engineering Systems
                        </p>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}