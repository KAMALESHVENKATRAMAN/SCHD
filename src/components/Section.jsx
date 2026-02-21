import InfoCard from "./InfoCard";
import React from "react";

export default function Section({ title, items }) {
  const id = title.toLowerCase().includes("diet")
    ? "diet"
    : title.toLowerCase().includes("workout")
    ? "workout"
    : "face";

  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <InfoCard key={idx} {...i} />
        ))}
      </div>
    </section>
  );
}