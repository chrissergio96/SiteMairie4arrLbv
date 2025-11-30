import React, { useState, useEffect } from "react";
import { db } from "../firebaseConf";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import './BreakingNewsForm.css'

const BreakingNewsForm = ({ editItem, onFinish }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editItem) {
      setText(editItem.text);
      setImage(editItem.image);
    }
  }, [editItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editItem) {
        const docRef = doc(db, "breakingnews", editItem.id);
        await updateDoc(docRef, { text, image });
      } else {
        await addDoc(collection(db, "breakingnews"), { text, image });
      }
      setText("");
      setImage("");
      onFinish();
    } catch (error) {
      console.error("Erreur Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="breakingnews-form">
      <input
        type="text"
        placeholder="Texte de la news"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de l'image (optionnel)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">{editItem ? "Modifier" : "Ajouter"}</button>
    </form>
  );
};

export default BreakingNewsForm;
