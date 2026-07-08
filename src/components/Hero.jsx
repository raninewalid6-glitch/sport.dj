import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "5", label: "Axes stratégiques" },
  { value: "1", label: "Base de données nationale" },
  { value: "100%", label: "Traçabilité numérique" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-emerald-100" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
          <Sparkles className="w-4 h-4" />
          Projet national de digitalisation
        </p>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          La plateforme nationale du{" "}
          <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
            sport djiboutien
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
          Centraliser les données, valoriser les talents, sécuriser les informations et
          rapprocher le sport de tous les citoyens : Sport.dj modernise la gouvernance
          sportive nationale grâce au numérique.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#plateforme"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
          >
            Explorer la plateforme
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#conclusion"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 bg-white text-slate-700 font-semibold hover:border-sky-400 hover:text-sky-600 transition"
          >
            Pourquoi digitaliser ?
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-black text-sky-600">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
