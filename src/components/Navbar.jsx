import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="font-bold text-xl">Model Aesthetic Plan</h1>
        <div className="space-x-4 text-sm text-gray-300">
          <a href="#diet">Diet</a>
          <a href="#workout">Workout</a>
          <a href="#face">Face Care</a>
        </div>
      </div>
    </nav>
  );
}