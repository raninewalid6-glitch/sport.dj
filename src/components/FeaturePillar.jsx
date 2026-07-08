import React from "react";
import { CheckCircle2, Lightbulb, Quote } from "lucide-react";

const toneStyles = {
  sky: {
    badge: "bg-sky-600",
    icon: "bg-sky-100 text-sky-700",
    ring: "border-sky-200",
    quote: "bg-sky-50 border-sky-200 text-sky-900",
  },
  emerald: {
    badge: "bg-emerald-600",
    icon: "bg-emerald-100 text-emerald-700",
    ring: "border-emerald-200",
    quote: "bg-emerald-50 border-emerald-200 text-emerald-900",
  },
  violet: {
    badge: "bg-violet-600",
    icon: "bg-violet-100 text-violet-700",
    ring: "border-violet-200",
    quote: "bg-violet-50 border-violet-200 text-violet-900",
  },
  indigo: {
    badge: "bg-indigo-600",
    icon: "bg-indigo-100 text-indigo-700",
    ring: "border-indigo-200",
    quote: "bg-indigo-50 border-indigo-200 text-indigo-900",
  },
  amber: {
    badge: "bg-amber-600",
    icon: "bg-amber-100 text-amber-700",
    ring: "border-amber-200",
    quote: "bg-amber-50 border-amber-200 text-amber-900",
  },
};

export default function FeaturePillar({
  id,
  index,
  icon: Icon,
  title,
  tone = "sky",
  image="/sport-2.webp",
  forces,
  opportunites,
  why,
  reversed = false,
}) {
  const styles = toneStyles[tone] ?? toneStyles.sky;

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 px-4 sm:px-6 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
    >
      <div className={`max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          {image && (
            <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] shadow-lg border border-slate-200">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm shadow-md px-3 py-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${styles.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold ${styles.badge}`}>
                  {index}
                </span>
              </div>

              <h3 className="absolute bottom-4 left-4 right-4 text-xl sm:text-2xl font-black text-white drop-shadow-md">
                {title}
              </h3>
            </div>
          )}

          {!image && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${styles.icon}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold ${styles.badge}`}>
                  {index}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{title}</h3>
            </>
          )}

          <div className={`mt-6 rounded-2xl border p-5 ${styles.quote}`}>
            <div className="flex gap-3">
              <Quote className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base leading-relaxed">{why}</p>
            </div>
          </div>
        </div>

        <div className={`rounded-3xl border ${styles.ring} bg-white p-6 sm:p-8 shadow-sm`}>
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              <CheckCircle2 className="w-4 h-4" /> Forces
            </h4>
            <ul className="space-y-2">
              {forces.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-slate-700">
                  <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${styles.badge}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              <Lightbulb className="w-4 h-4" /> Opportunités
            </h4>
            <ul className="space-y-2">
              {opportunites.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-slate-700">
                  <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${styles.badge}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}