// src/Admin/ActualitesDetailsForm.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, storage } from "../firebaseConf";
import { doc, getDoc, setDoc, collection, addDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ActualitesDetailsForm = () => {
  const { id, detailId } = useParams(); // id = actualiteId
  const navigate = useNavigate();

  const [contenu, setContenu] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (detailId) {
      const fetchDetail = async () => {
        const docRef = doc(db, "actualitesDetails", detailId);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          setContenu(data.contenu || "");
        }
      };
      fetchDetail();
    }
  }, [detailId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (imageFile) {
        const storageRef = ref(storage, `actualitesDetails/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            null,
            (error) => reject(error),
            async () => {
              imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          );
        });
      }

      if (detailId) {
        const docRef = doc(db, "actualitesDetails", detailId);
        await updateDoc(docRef, {
          actualiteId: id,
          contenu,
          imageUrl: imageUrl || undefined,
        });
      } else {
        await addDoc(collection(db, "actualitesDetails"), {
          actualiteId: id,
          contenu,
          imageUrl: imageUrl || "",
          createdAt: new Date(),
        });
      }

      navigate(`/actualites/${id}`);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'enregistrement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{detailId ? "Modifier" : "Ajouter"} un détail d'actualité</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contenu (sauts de ligne autorisés)</label>
          <textarea value={contenu} onChange={(e) => setContenu(e.target.value)} rows={6} required />
        </div>

        <div>
          <label>Image (optionnelle)</label>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        </div>

        <button type="submit" disabled={loading}>{loading ? "Enregistrement..." : "Valider"}</button>
      </form>
    </div>
  );
};

export default ActualitesDetailsForm;
