import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '../context/ThemeContext';
import AppLayout from '../layouts/AppLayout';
import AppRoutes from '../components/AppRoutes';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}