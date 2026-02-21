import { motion } from "framer-motion";
import React from "react";

export default function InfoCard({ title, points, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
    >
      <img src={image} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h4 className="font-semibold mb-2">{title}</h4>
        <ul className="text-sm text-gray-300 list-disc ml-4 space-y-1">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}