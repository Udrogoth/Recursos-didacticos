
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import FichasPage from '../pages/FichasPage';
import PageEnConstruccion from '../pages/PageEnConstruccion';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/fichas" element={<FichasPage />} />
      <Route path="/simulador" element={<PageEnConstruccion />} />
      <Route path="/narrativa" element={<PageEnConstruccion />} />
    </Routes>
  );
}