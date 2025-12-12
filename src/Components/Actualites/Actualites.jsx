// src/Components/Actualites/Actualites.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Actualites.css";

const sampleData = [
  {
    id: "1",
    titre: "La Mairie du bonheur a besoin d'une plage propre,  et ensemble....on aura notre plage propre...",
    imageUrl: "https://scontent.flbv3-1.fna.fbcdn.net/v/t39.30808-6/468650441_1611718162753309_9197932230552368310_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeELZz9hX6Pdn-xq3VyZ0-a3yQGfItfkLkXJAZ8i1-QuRXI6GhmYdx-z95ojFKptMf1lg302Gr2RVOJQVdGyU-WN&_nc_ohc=C0uvkmt25fMQ7kNvwGKZJx-&_nc_oc=AdmKJkSiMM9B9tkrQu5Vbeoy2xVmOVfaLtSu_j5rCkjE2w2TwGfUPFrGXrP0f9DQNn8&_nc_zt=23&_nc_ht=scontent.flbv3-1.fna&_nc_gid=L3xZiVGtoShCDcRJnDT3rQ&oh=00_AfibVDAXDBnoH1HuQhtkXSHrypkgFbcxBCP2MqIp2d-o4g&oe=693210DD",
  },
  {
    id: "2",
    titre: "Port-Gentil : Houangni Ambouroue élu maire avec 100% des voix",
    imageUrl: "https://gabonactu.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-29-at-11.29.36.jpeg"
  },
  {
    id: "3",
    titre: "Communication présidentielle : Au cœur de l’agenda d’Oligui Nguéma",
    imageUrl: "https://gabonactu.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-29-at-11.29.36.jpeg"
  },
  {
    id: "4",
    titre: "Activités culturelles",
    imageUrl: "https://gabonactu.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-29-at-11.29.36.jpeg"
  }
];

const Actualites = () => {
  const navigate = useNavigate();

  return (
    <div className="actualites-container">
      <h2 className="actualites-title">A la Une</h2>

      <div className="actualites-carousel">
        {sampleData.map((actu) => (
          <div
            key={actu.id}
            className="actualite-card"
            onClick={() => navigate(`/actualites/${actu.id}`)}
          >
            <img src={actu.imageUrl} alt={actu.titre} className="actualite-image" />
            <p className="actualite-titre">{actu.titre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actualites;
