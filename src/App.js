// src/App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './ComponentsUrbanisme/ScrollToTop/ScrollToTop.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accueil from './Pages/Accueil.jsx';
import Etatcivil from './Pages/Etatcivil.jsx';
import Urbanisme from './Pages/Urbanisme.jsx';
import Amenagements from './Pages/Amenagements.jsx';
import ReglesUrb from './Pages/ReglesUrb.jsx';
import Transcription from './Pages/Transcription.jsx';
import Galerie from './Pages/Galerie.jsx';
import Service from './Pages/Service.jsx';
import Galeriemariage from './Pages/Galeriemariage.jsx';
import Cdqgalerie from './Cdqgalerie/Cdqheadergal/Cdqheadergal.js';
import Socialgalerie from './Pages/Socialgalerie.jsx';
import Culturegalerie from './Pages/Culturegalerie.jsx';
import Dossiercdq1 from './Pages/Dossiercdq1.jsx';
import Agenda from './Pages/Agenda.jsx';
import Légalisation from './Pages/Légalisation.jsx';
import AutorisationsUrbanisme from './Pages/AutorisationsUrbanisme.jsx';
import TravauxUrbanisme from './Pages/TravauxUrbanisme.jsx';
import Technique from './Pages/Technique.jsx';
import Mariage from './Pages/Mariage.jsx';
import Apropos from './Pages/Apropos.jsx';
import Servicesocial from './Pages/Servicesocial.jsx';
import Aidesocials from './Pages/Aidesocials.jsx';
import Projet from './Pages/Projet.jsx';
import Numerosutiles from './Pages/Numerosutiles.jsx';
import FaqUtilisateurs from './Pages/FaqUtilisateurs.jsx';
import Splash from './Pages/Splash.jsx';
import Maire from './Pages/Maire.jsx';

import BreakingNews from './Components/BreakingNews/BreakingNews.js';
import Dashboard from './Admin/Dashboard.js';
import BreakingNewsList from './Admin/BreakingNewsList.js';
import BreakingNewsForm from './Admin/BreakingNewsForm.js';
import ProtectedRoute from './Admin/ProtectedRoute.js';
import AdminLogin from './Admin/AdminLogin.js';
import ActualitesList from './Admin/ActualitesList.js';
import ActualitesForm from './Admin/ActualitesForm.js';
import ActualitesDetailsForm from './Admin/ActualitesDetailsForm.js';
import DetailActualites from './DetailActualites/DetailActualites.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Mairie from './Pages/Mairie.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Pages publiques */}
          <Route path="/" element={<Splash />} />
          <Route path="/maire" element={<Maire />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/etatcivil" element={<Etatcivil />} />
          <Route path="/legalisation" element={<Légalisation />} />
          <Route path="/urbanisme" element={<Urbanisme />} />
          <Route path="/amenagements" element={<Amenagements />} />
          <Route path="/reglesurb" element={<ReglesUrb />} />
          <Route path="/transcription" element={<Transcription />} />
          <Route path="/servicesocial" element={<Servicesocial />} />
          <Route path="/aidesocials" element={<Aidesocials />} />
          <Route path="/autorisationsurbanisme" element={<AutorisationsUrbanisme />} />
          <Route path="/travauxurbanisme" element={<TravauxUrbanisme />} />
          <Route path="/technique" element={<Technique />} />
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/mairie" element={<Mairie />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/numerosutiles" element={<Numerosutiles />} />
          <Route path="/faq" element={<FaqUtilisateurs />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/service" element={<Service />} />
          <Route path="/cdqgalerie" element={<Cdqgalerie />} />
          <Route path="/socialgalerie" element={<Socialgalerie />} />
          <Route path="/culturegalerie" element={<Culturegalerie />} />
          <Route path="/galeriemariage" element={<Galeriemariage />} />
          <Route path="/dossiercdq1" element={<Dossiercdq1 />} />
          <Route path="/agenda" element={<Agenda />} />

          {/* Détails actualités */}
          <Route path="/actualites/:id" element={<DetailActualites />} />

          {/* Breaking news publique */}
          <Route path="/breakingnews" element={<BreakingNews />} />

          {/* ADMIN */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/breakingnews" element={<ProtectedRoute><BreakingNewsList /></ProtectedRoute>} />
          <Route path="/admin/breakingnews/new" element={<ProtectedRoute><BreakingNewsForm /></ProtectedRoute>} />
          <Route path="/admin/breakingnews/:id/edit" element={<ProtectedRoute><BreakingNewsForm /></ProtectedRoute>} />

          {/* Actualités admin */}
          <Route path="/admin/actualites" element={<ProtectedRoute><ActualitesList /></ProtectedRoute>} />
          <Route path="/admin/actualites/new" element={<ProtectedRoute><ActualitesForm /></ProtectedRoute>} />
          <Route path="/admin/actualites/edit/:id" element={<ProtectedRoute><ActualitesForm /></ProtectedRoute>} />

          {/* Détails des actualités */}
          <Route path="/admin/actualites/:id/details/new" element={<ProtectedRoute><ActualitesDetailsForm /></ProtectedRoute>} />
          <Route path="/admin/actualites/:id/details/edit/:detailId" element={<ProtectedRoute><ActualitesDetailsForm /></ProtectedRoute>} />

          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
