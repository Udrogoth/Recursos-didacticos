
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import FichasPage from '../pages/FichasPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/fichas" element={<FichasPage />} />
    </Routes>
  );
}