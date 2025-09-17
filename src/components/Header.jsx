import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Asegúrate de tener Heroicons instalados

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { to: '/', label: 'Inicio' },
    { to: '/fichas', label: 'Fichas' },
    { to: '/juegos-asociacion', label: 'Juego de asociación' },
    { to: '/narrativa', label: 'Narrativa guiada' },
    { to: '/simulador', label: 'Simulador' },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white px-6 py-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        {/* Identidad del proyecto */}
        <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <span className="text-indigo-400 text-3xl font-bold tracking-tight">📘</span>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
            Recursos Didácticos
          </h1>
        </NavLink>

        {/* Botón hamburguesa en mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuAbierto(!menuAbierto)} className="text-white focus:outline-none">
            {menuAbierto ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Navegación + Toggle en desktop */}
        <div className="hidden md:flex items-center gap-6">
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
          <ThemeToggle />
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div className="md:hidden mt-4 space-y-2">
          {enlaces.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuAbierto(false)}
              className={({ isActive }) =>
                [
                  'block px-4 py-2 rounded text-sm font-medium transition',
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-white hover:bg-indigo-700',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="px-4 pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}