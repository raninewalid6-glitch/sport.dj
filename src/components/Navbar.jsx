import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";

const navLinks = [
  { href: "#plateforme", label: "Plateforme" },
  { href: "#performances", label: "Performances" },
  { href: "#formation", label: "Formation" },
  { href: "#cybersecurite", label: "Cybersécurité" },
  { href: "#innovation", label: "Innovation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // null | "login" | "register"

  const openAuth = (tab) => {
    setIsOpen(false);
    setAuthModal(tab);
  };

  return (
    <>
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-gradient-to-br from-sky-600 to-emerald-500 flex items-center justify-center text-white font-black text-lg">
              S
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-900 truncate">
              Sport<span className="text-sky-600">.dj</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openAuth("login")}
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-sky-600 transition"
            >
              Connexion
            </button>
            <button
              onClick={() => openAuth("register")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
            >
              Inscription
            </button>
          </div>

          <button
            className="lg:hidden shrink-0 text-slate-700"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden border-t border-slate-200 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2.5 text-sm font-medium text-slate-600 hover:text-sky-600 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-3 px-2">
              <button
                onClick={() => openAuth("login")}
                className="flex-1 py-2.5 rounded-full border border-slate-300 text-sm font-semibold text-slate-700"
              >
                Connexion
              </button>
              <button
                onClick={() => openAuth("register")}
                className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white text-sm font-semibold"
              >
                Inscription
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>

    <AuthModal
      key={authModal ?? "closed"}
      open={authModal !== null}
      initialTab={authModal ?? "login"}
      onClose={() => setAuthModal(null)}
    />
    </>
  );
}
