import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import logo from "./logo mairie 4arr.png";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("M"); // Initialiser avec la première lettre "M"
  const fullText = "MAIRIE DU 4e ARRONDISSEMENT DE LIBREVILLE"; // Texte à afficher lettre par lettre

  useEffect(() => {
    let index = 1; // Commencer à 1 car "M" est déjà affiché

    // Effet pour l'animation lettre par lettre
    const interval = setInterval(() => {
      setText((prevText) => prevText + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(interval); // Arrêter l'intervalle une fois que tout le texte est affiché
      }
    }, 80); // 100ms de délai entre chaque lettre

    // Timer pour redirection après 5 secondes
    const timer = setTimeout(() => {
      navigate("/accueil");
    }, 5000);

    // Nettoyage des timers et de l'intervalle au démontage
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [fullText, navigate]); // Dépendances correctes : fullText et navigate

  return (
    <div className="splash-container">
      <img src={logo} alt="Logo de la Mairie du 4e Arrondissement" className="logo" />
      <h3><strong>{text}</strong></h3> {/* Texte animé lettre par lettre */}
    </div>
  );
};

export default SplashScreen;
