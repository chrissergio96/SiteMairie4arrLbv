import React, { useState, useEffect } from 'react';
import './Faq.css';

const Faq = () => {
  // Charger les questions depuis le LocalStorage si elles existent
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem('questions');
    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  const [newQuestion, setNewQuestion] = useState('');
  const [adminResponses, setAdminResponses] = useState({});
  const [isEditing, setIsEditing] = useState(null);  // Pour identifier la question en édition
  const [editedQuestion, setEditedQuestion] = useState('');

  // Sauvegarder les questions dans le LocalStorage chaque fois qu'elles changent
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  // Fonction pour soumettre une question
  const submitQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: null }]);
      setNewQuestion(''); // Réinitialiser le champ de texte
    }
  };

  // Fonction pour permettre à l'admin de répondre à une question
  const handleAdminResponse = (index, response) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = response;
    setQuestions(updatedQuestions);
  };

  // Fonction pour modifier une question existante
  const handleEditQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = editedQuestion;
    setQuestions(updatedQuestions);
    setIsEditing(null); // Arrêter l'édition
    setEditedQuestion('');
  };

  // Fonction pour supprimer une question
  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="faq-container">
       
    <div class="quest">
        <h1> F.A.Q </h1>

        <h2>1. État Civil</h2>
        <div>
            <h3>Q : Comment faire une procédure de mariage ?</h3>
            <p><strong>R : </strong> 
             Les futurs mariés doivent déposer, une semaine avant la date de cette célébration, un dossier comprenant :</p>
           <p> <strong>- Une demande manuscrite adressée au Maire ;</strong></p>
           <p> <strong>- Un extrait d’acte de naissance des futurs mariés ;</strong></p>
           <p> <strong>- Une attestation sur l’honneur de célibat des futurs mariés ;</strong></p>
           <p> <strong>- Une fiche polygamique pour le futur conjoint ;</strong></p>
           <p> <strong>- Une autorisation de contracter un mariage civil par la hiérarchie pour les militaires, gendarmes, policiers ;</strong></p>
           <p> <strong>- Une fiche de témoins des futurs mariés ;</strong></p>
           <p> <strong>- Une copie des pièces d’identité des témoins ;</strong></p>
           <p> <strong>- Un certificat médical des futurs mariés ;</strong></p>
           <p> <strong>- Une copie de la pièce d’identité des futurs mariés.</strong></p>

        </div>
        <div>
            <h3>Q : Comment obtenir un acte de naissance ?</h3>
            <p><strong>R :</strong>  Les géniteurs ou leur représentant, le médecin ou la sage-femme doivent procéder auprès des services d’état civil à la déclaration du fait trois jours après l’accouchement, à la déclaration sont annexés les pièces suivantes du bulletin de naissance :</p>
            <p> <strong>- Un certificat de naissance ou bulletin de naissance ;</strong></p>
            <p> <strong>- Une copie de la carte nationale d’identité pour les parents de nationalité gabonaise ;</strong></p>
            <p> <strong>- Une copie de la carte de séjour pour les parents non gabonais.</strong></p>

        </div>
        <div>
            <h3>Q : Que faire en cas de perte, omission, erreur et lacération d’un acte d’état civil ?</h3>
            <p><strong>R : Perte d’un acte :</strong>
            Toute personne intéressée peut se rapprocher du centre d’état civil ayant établi l’acte afin d’obtenir une copie tirée de la souche du registre.
            </p>
            <p><strong>R : Erreur ou omission sur un acte :</strong>
            Toute personne intéressée peut saisir le Tribunal de Première Instance aux fins d’obtention d’un jugement rectificatif. Après obtention dudit jugement, l’intéressé se rapproche de la Mairie pour transcription et délivrance de l’acte. </p> 
             <p><strong>R :Lacération de registre :</strong> 
             Toute personne intéressée est tenue de saisir le Tribunal du lieu de naissance afin d’obtenir un jugement autorisant la reconstitution de l’acte.  </p>
        </div>

       
        

        <h2>3. Collecte des Déchets et Environnement</h2>
        <div>
            <h3>Q : Quand les déchets sont-ils collectés dans le 4e Arrondissement ?</h3>
            <p><strong>R :</strong> La collecte des déchets se fait tous les jours sauf le dimanche. Assurez-vous de sortir vos poubelles de 18h à 21h.</p>
        </div>
        <div>
            <h3>Q : Comment signaler une zone insalubre ?</h3>
            <p><strong>R :</strong> Vous pouvez signaler une zone insalubre en remplissant un formulaire de signalement sur notre site internet ou en nous contactant directement via la ligne dédiée.</p>
        </div>
        <div>
            <h3>Q : Que faire en cas de dépôt sauvage de déchets ?</h3>
            <p><strong>R :</strong> Si vous constatez un dépôt sauvage de déchets, merci de le signaler au service de l’assainissement de la Mairie pour que nous puissions organiser une intervention rapide.</p>
        </div>

        <h2>4. Sécurité et Ordre Public</h2>
        <div>
            <h3>Q : Comment signaler un problème de sécurité dans le quartier ?</h3>
            <p><strong>R :</strong> Vous pouvez signaler un problème de sécurité en contactant le commissariat local ou en utilisant notre plateforme en ligne dédiée aux alertes citoyennes.</p>
        </div>
        <div>
            <h3>Q : Comment faire une demande pour un éclairage public dans ma rue ?</h3>
            <p><strong>R :</strong> Si vous constatez un manque d’éclairage public dans votre quartier, vous pouvez faire une demande via notre site web ou en vous rendant au service des infrastructures de la Mairie.</p>
        </div>

        <h2>5. Services Divers</h2>
      
        <div>
            <h3>Q : Comment obtenir un certificat de résidence ?</h3>
            <p><strong>R :</strong> Le certificat de résidence peut être obtenu en vous rendant au service de l’Etat Civil avec une pièce d’identité et un justificatif de domicile.</p>
        </div>
    </div>
      <h1>Foire Aux Questions (FAQ)</h1>

      {/* Formulaire pour poser une question */}
      <form onSubmit={submitQuestion} className="faq-form">
        <label htmlFor="userQuestion">Posez votre question :</label>
        <input
          type="text"
          id="userQuestion"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Entrez votre question ici"
          required
        />
        <button className='sub' type="submit">Envoyer</button>
      </form>

      <div className="faq-list">
        {questions.length > 0 ? (
          questions.map((item, index) => (
            <div key={index} className="faq-item">
              {isEditing === index ? (
                <div className="edit-question">
                  <input
                    type="text"
                    value={editedQuestion}
                    onChange={(e) => setEditedQuestion(e.target.value)}
                    placeholder="Modifier la question"
                  />
                  <button onClick={() => handleEditQuestion(index)}>Enregistrer</button>
                  <button onClick={() => setIsEditing(null)}>Annuler</button>
                </div>
              ) : (
                <div>
                  <h2 className="faq-question">{item.question}</h2>
                  <button onClick={() => {
                    setIsEditing(index);
                    setEditedQuestion(item.question);
                  }}>Modifier</button>
                  <button onClick={() => handleDeleteQuestion(index)}>Supprimer</button>
                </div>
              )}

              {item.answer ? (
                <p className="faq-answer"><strong>Réponse :</strong> {item.answer}</p>
              ) : (
                <div className="admin-response">
                  <label htmlFor={`response-${index}`}>Réponse de l'admin :</label>
                  <input
                    type="text"
                    id={`response-${index}`}
                    value={adminResponses[index] || ''}
                    onChange={(e) => setAdminResponses({ ...adminResponses, [index]: e.target.value })}
                    placeholder="Répondre à la question"
                  />
                  <button onClick={() => handleAdminResponse(index, adminResponses[index])}>
                    Envoyer la réponse
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Aucune question pour le moment. Soyez le premier à poser une question !</p>
        )}
      </div>
    </div>
  );
};

export default Faq;
