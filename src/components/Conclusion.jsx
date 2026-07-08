import React from "react";
import { Landmark, Medal, ShieldCheck, Users } from "lucide-react";

const points = [
  { icon: Landmark, text: "Elle modernise la gouvernance." },
  { icon: Medal, text: "Elle valorise les talents nationaux." },
  { icon: ShieldCheck, text: "Elle sécurise les données sensibles." },
  { icon: Users, text: "Elle favorise l'inclusion et l'innovation." },
];

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200">
          Conclusion générale
        </p>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
          La numérisation du sport djiboutien est une nécessité stratégique
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {points.map((point) => (
            <div
              key={point.text}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-100">{point.text}</p>
            </div>
          ))}
        </div>

        <a
          href="#top"
          className="mt-12 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-900 font-bold hover:shadow-xl hover:shadow-sky-500/30 transition"
        >
          Revenir en haut
        </a>
      </div>
    </section>
  );
}
