import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    badge: "Projet national de digitalisation",
    lead: "La plateforme nationale du",
    highlight: "sport djiboutien",
    desc: "Centraliser les données des athlètes, clubs et fédérations, simplifier les procédures administratives et garantir la transparence de la gestion sportive.",
    image: "/sport.webp",
    tag: "Base de données nationale",
  },
  {
    badge: "Data & intelligence artificielle",
    lead: "Mesurer et révéler",
    highlight: "les talents",
    desc: "Des statistiques précises, des tableaux de bord pour les entraîneurs et une détection des talents grâce à l'intelligence artificielle.",
    image: "/sport-3.jpg",
    tag: "Suivi des performances",
  },
  {
    badge: "Formation en ligne",
    lead: "Former les",
    highlight: "cadres du sport",
    desc: "Une formation accessible partout, une gestion numérique des diplômes et un suivi des parcours professionnels des entraîneurs.",
    image: "/sport-2.webp",
    tag: "Certification numérique",
  },
  {
    badge: "Sécurité & confiance",
    lead: "Protéger les",
    highlight: "données sensibles",
    desc: "Un Centre de cybersécurité du sport en partenariat avec l'ANSIE pour prévenir les cyberattaques et sécuriser les informations stratégiques.",
    image: "/sport-4.webp",
    tag: "Cybersécurité",
  },
  {
    badge: "Un sport pour tous",
    lead: "Rapprocher le sport",
    highlight: "des citoyens",
    desc: "Des applications mobiles et des outils numériques pour promouvoir le sport féminin, scolaire et accessible partout à Djibouti.",
    image: "/sport-5.webp",
    tag: "Innovation & inclusion",
  },
];

const stats = [
  { value: "5", label: "Axes stratégiques" },
  { value: "1", label: "Base de données nationale" },
  { value: "100%", label: "Traçabilité numérique" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, paused]);

  return (
    <section id="top" className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-emerald-100" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Piste des slides */}
          <div className="overflow-hidden md:mx-14 lg:mx-16">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.highlight}
                  className="w-full shrink-0 px-0.5"
                  aria-hidden={index !== current}
                >
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:min-h-[440px]">
                    <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                      <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        {slide.badge}
                      </p>

                      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                        {slide.lead}{" "}
                        <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
                          {slide.highlight}
                        </span>
                      </h1>

                      <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                        {slide.desc}
                      </p>

                      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a
                          href="#plateforme"
                          tabIndex={index === current ? 0 : -1}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
                        >
                          Explorer la plateforme
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href="#conclusion"
                          tabIndex={index === current ? 0 : -1}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 bg-white text-slate-700 font-semibold hover:border-sky-400 hover:text-sky-600 transition"
                        >
                          Pourquoi digitaliser ?
                        </a>
                      </div>
                    </div>

                    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                      <div className="absolute -inset-4 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 rounded-[2.5rem] blur-2xl" />
                      <div className="relative rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-sky-900/10 overflow-hidden aspect-square">
                        <img
                          src={slide.image}
                          alt={slide.tag}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md px-4 py-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-sky-500 to-emerald-400" />
                          <span className="text-sm font-bold text-slate-800">{slide.tag}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèches */}
          <button
            type="button"
            onClick={prev}
            aria-label="Slide précédent"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 w-11 h-11 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-md text-slate-700 hover:text-sky-600 hover:border-sky-300 transition z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Slide suivant"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 w-11 h-11 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-md text-slate-700 hover:text-sky-600 hover:border-sky-300 transition z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicateurs */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.highlight}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Aller au slide ${index + 1}`}
              aria-current={index === current}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-gradient-to-r from-sky-600 to-emerald-500"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
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
