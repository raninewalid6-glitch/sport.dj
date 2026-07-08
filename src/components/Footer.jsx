import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-emerald-500 flex items-center justify-center text-white font-black text-sm">
            S
          </div>
          <span className="font-semibold text-white">Sport.dj</span>
        </div>
        <p>Plateforme nationale de digitalisation du sport — République de Djibouti</p>
      </div>
    </footer>
  );
}
