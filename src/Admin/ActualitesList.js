// src/Admin/ActualitesList.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConf";
import { useNavigate } from "react-router-dom";

const ActualitesList = () => {
  const [actualites, setActualites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActualites = async () => {
      const querySnapshot = await getDocs(collection(db, "actualites"));
      setActualites(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchActualites();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette actualité ?")) {
      await deleteDoc(doc(db, "actualites", id));
      setActualites(actualites.filter(a => a.id !== id));
    }
  };

  return (
    <div>
      <h2>Liste des actualités</h2>
      <button onClick={() => navigate("/admin/actualites/new")}>➕ Ajouter</button>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actualites.map(a => (
            <tr key={a.id}>
              <td>{a.titre}</td>
              <td>
                <button onClick={() => navigate(`/admin/actualites/edit/${a.id}`)}>✏️ Modifier</button>
                <button onClick={() => handleDelete(a.id)}>🗑️ Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActualitesList;
