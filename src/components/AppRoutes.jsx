
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import FichasPage from '../pages/FichasPage';
import PageEnConstruccion from '../pages/PageEnConstruccion';
import SimuladorPage from '../pages/SimuladorPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/fichas" element={<FichasPage />} />
      <Route path="/simulador" element={<SimuladorPage />} />
      <Route path="/narrativa" element={<PageEnConstruccion />} />
    </Routes>
  );
}