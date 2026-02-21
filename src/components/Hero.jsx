import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h2 className="text-4xl font-bold mb-4">Your 1‑Year Aesthetic Transformation</h2>
        <p className="text-gray-400">
          Simple Chennai‑friendly diet, safe home workout (5kg dumbbells) and clean face routine.
        </p>
      </div>

      <img
        className="rounded-2xl shadow-lg"
        src="https://images.unsplash.com/photo-1546484959-f9a21c9b33fd"
        alt="fitness"
      />
    </motion.section>
  );
}