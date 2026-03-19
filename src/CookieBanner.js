import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  // L'état qui contrôle si la bannière est visible ou non
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Au chargement du site, on vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem("amgh_cookie_consent");
    if (!consent) {
      setIsVisible(true); // S'il n'y a pas de choix enregistré, on affiche la bannière
    }
  }, []);

  // Fonction si l'utilisateur accepte tout
  const handleAcceptAll = () => {
    localStorage.setItem("amgh_cookie_consent", "all");
    setIsVisible(false);
    // Ici, vous pourriez déclencher vos scripts d'analyse (ex: Google Analytics)
  };

  // Fonction si l'utilisateur n'accepte que le strict minimum
  const handleAcceptNecessary = () => {
    localStorage.setItem("amgh_cookie_consent", "necessary");
    setIsVisible(false);
  };

  // Si la bannière ne doit pas être visible, on ne rend rien
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#111111] text-white p-6 z-[100] border-t border-[#D4AF37] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6 font-light-ui transition-all duration-500">
      {/* TEXTE EXPLICATIF */}
      <div className="max-w-4xl text-sm text-gray-300 leading-relaxed text-justify md:text-left">
        <p className="font-cinzel text-[#D4AF37] font-bold mb-2 text-base tracking-widest uppercase">
          Gérer vos préférences de navigation
        </p>
        <p>
          Pour vous offrir une expérience digitale d'élite, AMGH ELEVATION
          utilise des cookies. Certains sont strictement nécessaires au
          fonctionnement et à la sécurité du site. D'autres nous permettent
          d'analyser l'audience pour optimiser continuellement nos services.
          Vous gardez le contrôle total sur vos données.
        </p>
      </div>

      {/* BOUTONS D'ACTION */}
      <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
        <button
          onClick={handleAcceptNecessary}
          className="px-6 py-3 text-xs uppercase tracking-widest text-gray-400 border border-gray-700 hover:text-white hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto text-center"
        >
          Uniquement nécessaires
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-6 py-3 text-xs uppercase tracking-widest bg-[#D4AF37] text-[#111111] font-bold hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center"
        >
          J'accepte
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
