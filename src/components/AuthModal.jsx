import React, { useState } from "react";
import { X, User, Mail, Lock, Phone, ArrowRight } from "lucide-react";

export default function AuthModal({ open, initialTab = "login", onClose }) {
  const [tab, setTab] = useState(initialTab);

  if (!open) return null;

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition";

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-2 bg-gradient-to-r from-sky-600 to-emerald-500" />

        <div className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-600 to-emerald-500 flex items-center justify-center text-white font-black">
              S
            </div>
            <span className="text-lg font-bold text-slate-900">
              Sport<span className="text-sky-600">.dj</span>
            </span>
          </div>

          <div className="flex rounded-full bg-slate-100 p-1 mb-6">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2 text-sm font-semibold rounded-full transition ${
                tab === "login" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-2 text-sm font-semibold rounded-full transition ${
                tab === "register" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              }`}
            >
              Inscription
            </button>
          </div>

          {tab === "login" ? (
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" placeholder="Adresse email" className={inputClass} required />
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" placeholder="Mot de passe" className={inputClass} required />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
              >
                Se connecter <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-sm text-slate-500">
                Pas encore de compte ?{" "}
                <button type="button" onClick={() => setTab("register")} className="font-semibold text-sky-600">
                  Inscrivez-vous
                </button>
              </p>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Nom complet" className={inputClass} required />
              </div>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" placeholder="Adresse email" className={inputClass} required />
              </div>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="tel" placeholder="Téléphone" className={inputClass} required />
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" placeholder="Mot de passe" className={inputClass} required />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
              >
                Créer mon compte <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-sm text-slate-500">
                Déjà inscrit ?{" "}
                <button type="button" onClick={() => setTab("login")} className="font-semibold text-sky-600">
                  Connectez-vous
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
