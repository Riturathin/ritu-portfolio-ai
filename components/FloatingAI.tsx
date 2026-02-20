"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function FloatingAI() {
    const [open, setOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askQuestion = async () => {
        if (!question.trim()) return;

        setLoading(true);
        setAnswer("");

        const res = await fetch("/api/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question }),
        });

        const data = await res.json();
        setAnswer(data.answer);
        setLoading(false);
    };

    const reset = () => {
        setQuestion("");
        setAnswer("");
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className="
    fixed bottom-8 right-8
    bg-gradient-to-br from-blue-500 to-blue-600
    text-white
    px-6 py-3
    rounded-full
    shadow-xl shadow-blue-500/30
    hover:scale-105
    active:scale-100
    transition-all duration-200
    z-50
  "
            >
                Ask Ritu
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-24 right-8
                            w-[400px]
                            bg-[#29117d]/95
                            backdrop-blur-xl
                            border border-white/10
                            shadow-2xl shadow-black/40
                            rounded-2xl
                            p-6
                            z-50
                            "
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg">
                                Ask about architecture, scale or impact
                            </h3>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-sm text-gray-500"
                            >
                                ✕
                            </button>
                        </div>

                        <textarea
                            className="
                                        w-full
                                        bg-white/5
                                        border border-white/10
                                        rounded-lg
                                        p-3
                                        mb-4
                                        text-white
                                        placeholder-white/40
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-500/40
                                        resize-none
                                    "
                            rows={3}
                            placeholder="Ask about architecture, scale, or AI..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />

                        <button
                            onClick={askQuestion}
                            className="
  bg-blue-600
  hover:bg-blue-500
  text-white
  w-full
  py-3
  rounded-lg
  font-medium
  transition
"
                        >
                            {loading ? "Thinking..." : "Ask"}
                        </button>

                        <AnimatePresence>
                            {answer && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-6 text-sm text-white/80 space-y-3 max-h-60 overflow-y-auto"
                                >
                                    <div className="border-t pt-3 text-sm mb-3 leading-relaxed">
                                        <ReactMarkdown
                                            components={{
                                                ul: ({ children }) => (
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {children}
                                                    </ul>
                                                ),
                                                li: ({ children }) => (
                                                    <li className="text-white/80">{children}</li>
                                                ),
                                                strong: ({ children }) => (
                                                    <strong className="block font-semibold text-white/60 mt-3 mb-3 text-[15px]">
                                                        {children}
                                                    </strong>
                                                ),
                                            }}
                                        >
                                            {answer}
                                        </ReactMarkdown>
                                    </div>

                                    <button
                                        onClick={reset}
                                        className="text-xs text-gray-500 hover:underline mt-2 hover:text-gray-400 transition"
                                    >
                                        Ask another question
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
