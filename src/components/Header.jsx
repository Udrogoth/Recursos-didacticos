import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const enlaces = [
    { to: '/', label: 'Inicio' },
    { to: '/fichas', label: 'Fichas' },
    { to: '/juegos-asociacion', label: 'Juego de asociación' },
    { to: '/narrativa', label: 'Narrativa guiada' },
    { to: '/simulador', label: 'Simulador' },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white px-6 py-5 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-6">
        
        {/* Identidad del proyecto */}
        <div className="flex items-center gap-3">
          <span className="text-indigo-400 text-3xl font-bold tracking-tight">📘</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            Recursos Didácticos
          </h1>
        </div>

        {/* Navegación + Toggle */}
        <div className="flex items-center gap-6 flex-wrap">
          <nav className="flex gap-4 text-sm sm:text-base font-medium" aria-label="Navegación principal">
            {enlaces.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    'transition-colors duration-200',
                    isActive
                      ? 'text-indigo-300 underline underline-offset-4 font-semibold'
                      : 'text-white hover:text-indigo-300',
                  ].join(' ')
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
