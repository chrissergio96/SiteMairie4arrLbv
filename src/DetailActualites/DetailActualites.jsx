// src/DetailActualites/DetailActualites.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConf";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import "./DetailActualites.css";

const DetailActualites = () => {
  const { id } = useParams();
  const [actualite, setActualite] = useState(null);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Sécurité : ne pas lancer si id est undefined

    const fetchActualite = async () => {
      try {
        const docRef = doc(db, "actualites", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setActualite(snapshot.data());
        } else {
          console.warn("Actualité non trouvée !");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'actualité :", error);
      }
    };

    const fetchDetails = async () => {
      try {
        const q = query(
          collection(db, "actualitesDetails"),
          where("actualiteId", "==", id)
        );
        const querySnapshot = await getDocs(q);
        const fetchedDetails = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDetails(fetchedDetails);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActualite();
    fetchDetails();
  }, [id]);

  if (loading) return <p>Chargement de l'actualité...</p>;
  if (!actualite) return <p>Actualité introuvable.</p>;

  return (
    <div className="detail-actualites-container">
      <h1>{actualite.titre}</h1>
      {actualite.imageUrl && (
        <img src={actualite.imageUrl} alt={actualite.titre} className="main-image" />
      )}

      {details.map((detail) => (
        <div key={detail.id} className="detail-text">
          {detail.imageUrl && <img src={detail.imageUrl} alt="" className="detail-image" />}
          {detail.contenu &&
            detail.contenu.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      ))}
    </div>
  );
};

export default DetailActualites;
