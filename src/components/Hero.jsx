import React from "react";
import { ArrowRight, Sparkles, Timer, TrendingUp } from "lucide-react";

const stats = [
  { value: "5", label: "Axes stratégiques" },
  { value: "1", label: "Base de données nationale" },
  { value: "100%", label: "Traçabilité numérique" },
];

function SportIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="relative rounded-[2rem] border border-slate-200 bg-white shadow-xl overflow-hidden aspect-square">
        <svg viewBox="0 0 400 400" className="w-full h-full" role="img" aria-label="Illustration d'un athlète sur une piste">
          <defs>
            <linearGradient id="trackGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect width="400" height="400" fill="#f8fafc" />
          <circle cx="200" cy="200" r="170" fill="url(#trackGrad)" opacity="0.08" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="url(#trackGrad)" strokeWidth="18" opacity="0.18" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="url(#trackGrad)" strokeWidth="18" strokeDasharray="180 620" strokeLinecap="round" />

          {/* Silhouette coureur stylisée */}
          <g transform="translate(120,110)" fill="url(#trackGrad)">
            <circle cx="72" cy="14" r="14" />
            <path d="M60 34c8 0 14 6 16 14l8 30 26 14-6 14-32-16-10-22-8 20 14 40-16 6-18-46 2-24-18 10-14 26-14-8 18-34c4-8 12-14 22-16z" />
          </g>
        </svg>

        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-2xl bg-white/95 border border-slate-200 shadow-md px-3 py-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
            <Timer className="w-4 h-4 text-sky-600" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 leading-none">Temps</div>
            <div className="text-sm font-bold text-slate-900 leading-none mt-1">09.58 s</div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-2xl bg-white/95 border border-slate-200 shadow-md px-3 py-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 leading-none">Talents suivis</div>
            <div className="text-sm font-bold text-slate-900 leading-none mt-1">120+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-emerald-100" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
           

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              La plateforme nationale du{" "}
              <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
                sport djiboutien
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Centraliser les données, valoriser les talents, sécuriser les informations et
              rapprocher le sport de tous les citoyens : Sport.dj modernise la gouvernance
              sportive nationale grâce au numérique.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
          </div>

          <SportIllustration />
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-sm text-center"
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
