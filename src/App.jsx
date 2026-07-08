import React from "react";
import { Database, ShieldCheck, GraduationCap, Activity, Smartphone } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturePillar from "./components/FeaturePillar";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

const pillars = [
  {
    id: "plateforme",
    icon: Database,
    tone: "sky",
    title: "Plateforme nationale Sport.dj",
    image: "/sport-2.webp",
    forces: [
      "Centralisation des données (athlètes, clubs, fédérations, infrastructures).",
      "Simplification des procédures administratives (licences, inscriptions, subventions).",
      "Transparence accrue dans la gestion.",
    ],
    opportunites: [
      "Créer une base unique fiable pour tout le sport djiboutien.",
      "Faciliter la communication entre ministère, clubs et fédérations.",
      "Réduire les erreurs et la corruption grâce à la traçabilité numérique.",
    ],
    why: "Sans plateforme, les données restent dispersées et difficiles à exploiter. La numérisation garantit une gouvernance moderne et efficace.",
  },
  
  {
    id: "formation",
    icon: GraduationCap,
    tone: "violet",
    title: "Plateforme de formation et certification",
    image: "/sport-3.jpg",
    forces: [
      "Formation en ligne accessible partout.",
      "Gestion numérique des diplômes et certifications.",
      "Suivi des parcours professionnels des entraîneurs et animateurs.",
    ],
    opportunites: [
      "Augmenter le nombre de cadres qualifiés dans tout le pays.",
      "Réduire les coûts de formation en utilisant le numérique.",
      "Garantir la reconnaissance officielle des diplômes.",
    ],
    why: "La formation traditionnelle est limitée par le temps et l'espace. La numérisation démocratise l'accès et assure une traçabilité des compétences.",
  },
  {
    id: "e-sport",
    icon: ShieldCheck,
    tone: "indigo",
    title: "e-sport et protection des données",
    image: "/sport-4.webp",
    forces: [
      "Protection des données sensibles (santé, identité, résultats).",
      "Création d'un Centre de cybersécurité du sport en partenariat avec l'ANSIE.",
      "Sensibilisation des clubs et fédérations.",
    ],
    opportunites: [
      "Renforcer la confiance des sportifs et partenaires.",
      "Prévenir les cyberattaques et fuites de données.",
    ],
    why: "Les données sportives sont stratégiques. Sans cybersécurité, elles peuvent être volées ou manipulées, ce qui fragilise tout le système.",
    reversed: true,
  },
  {
    id: "innovation",
    icon: Smartphone,
    tone: "amber",
    title: "Innovation et inclusion numérique",
    image: "/sport-5.webp",
    forces: [
      "Applications mobiles pour inscriptions et suivi des compétitions.",
      "Outils numériques pour promouvoir le sport féminin et scolaire.",
    ],
    opportunites: [
      "Rendre le sport accessible à tous, même dans les zones éloignées.",
      "Moderniser l'image du sport djiboutien.",
      "Favoriser l'inclusion sociale et l'égalité des chances.",
    ],
    why: "Le numérique rapproche le sport des citoyens. Il permet une participation plus large et une meilleure visibilité nationale et internationale.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {pillars.map((pillar, index) => (
        <FeaturePillar key={pillar.id} index={index + 1} {...pillar} />
      ))}
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;