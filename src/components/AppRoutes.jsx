import { Routes, Route } from 'react-router-dom';

// Páginas principales
import Hero from './Hero';
import RecursosDidacticosDashboard from '../components/RecursosDidacticosDashboard';

// Módulos didácticos
import FichasPage from '../recursos/fichas_comparativas/FichasPage';
import NarrativaPage from '../recursos/narativa_guiada/NarrativaPage';
import JuegoDePares from '../pages/JuegoDePares';

// Placeholder temporal
import PageEnConstruccion from '../pages/PageEnConstruccion';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Página de inicio */}
      <Route path="/" element={<Hero />} />

      {/* Módulos didácticos */}
      <Route path="/fichas" element={<FichasPage />} />
      <Route path="/narrativa" element={<NarrativaPage />} />
      <Route path="/juegos-asociacion" element={<JuegoDePares />} />
      <Route path="/simulador" element={<PageEnConstruccion />} />

      {/* Dashboard institucional */}
      <Route path="/dashboard" element={<RecursosDidacticosDashboard />} />

      {/* Ruta genérica para recursos en desarrollo */}
      <Route path="*" element={<PageEnConstruccion />} />
    </Routes>
  );
}
