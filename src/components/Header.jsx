import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-gray-900 dark:bg-gray-950 text-white px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Identidad del proyecto */}
        <h1 className="text-2xl font-bold tracking-tight">Recursos Didácticos</h1>

        {/* Navegación + Toggle */}
        <div className="flex items-center gap-6 flex-wrap">
          <nav className="flex gap-4 text-sm sm:text-base" aria-label="Navegación principal">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/fichas', label: 'Fichas' },
              { to: '/simulador', label: 'Simulador' },
              { to: '/narrativa', label: 'Narrativa' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'underline text-indigo-300 font-semibold'
                    : 'hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Toggle de tema */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}