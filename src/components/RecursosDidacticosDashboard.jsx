import { useNavigate } from 'react-router-dom';

export default function RecursosDidacticosDashboard() {
  const navigate = useNavigate();

  const recursos = [
    {
      icono: '🧠',
      titulo: 'Fichas Cognitivas',
      descripcion: 'Visualizan procesos mentales que afectan el aprendizaje.',
      ruta: '/fichas-cognitivas',
      disponible: false,
    },
    {
      icono: '📊',
      titulo: 'Fichas Comparativas',
      descripcion: 'Comparan modelos pedagógicos por criterios clave.',
      ruta: '/fichas',
      disponible: true,
    },
    {
      icono: '📘',
      titulo: 'Narrativas Guiadas',
      descripcion: 'Simulan decisiones educativas con retroalimentación.',
      ruta: '/narrativa',
      disponible: true,
    },
    {
      icono: '🎮',
      titulo: 'Juegos de Asociación',
      descripcion: 'Activan la discriminación conceptual mediante lógica lúdica.',
      ruta: '/juegos-asociacion',
      disponible: true,
    },
    {
      icono: '📈',
      titulo: 'Dashboards Pedagógicos',
      descripcion: 'Visualizan uso, impacto y articulación de los recursos.',
      ruta: '/dashboards-pedagogicos',
      disponible: false,
    },
    {
      icono: '🧪',
      titulo: 'Simulador',
      descripcion: 'Explora escenarios educativos interactivos.',
      ruta: '/simulador',
      disponible: false,
    },
  ];

  const manejarClick = (ruta, disponible) => {
    navigate(disponible ? ruta : '/page-en-construccion');
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
        📚 Recursos que facilitan el aprendizaje
      </h2>
      <p className="text-center text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
        Explora los principales tipos de recursos didácticos diseñados para activar la comprensión, organizar el pensamiento y conectar la teoría con la práctica.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recursos.map(({ icono, titulo, descripcion, ruta, disponible }) => (
          <button
            key={ruta}
            onClick={() => manejarClick(ruta, disponible)}
            className="text-left w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{icono}</div>
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{titulo}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{descripcion}</p>
            {!disponible && (
              <p className="mt-2 text-xs text-red-500">🚧 Recurso en construcción</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
