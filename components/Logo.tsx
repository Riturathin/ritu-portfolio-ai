"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 group select-none">

            <motion.div
                whileHover={{ rotateX: 6, rotateY: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="
          relative
          w-14 h-14
          flex items-center justify-center
          rounded-xl
          overflow-hidden
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
          bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0a0f1c]
        "
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}
            >

                {/* Metallic top highlight */}
                <div className="
          absolute inset-0
          bg-gradient-to-tr
          from-white/10
          via-transparent
          to-transparent
          pointer-events-none
        " />

                {/* Animated light sweep */}
                <motion.div
                    initial={{ x: "-150%" }}
                    animate={{ x: "150%" }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
            absolute inset-y-0
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            skew-x-[-20deg]
            pointer-events-none
          "
                />

                {/* RS Text */}
                <div
                    className="
            text-white
            text-xl
            font-extrabold
            tracking-wider
          "
                    style={{
                        transform: "translateZ(18px)",
                        textShadow: "0 6px 20px rgba(0,0,0,0.7)",
                    }}
                >
                    RS
                </div>
            </motion.div>

            <span className="text-white font-medium tracking-wide text-lg">

            </span>

        </Link>
    );
}