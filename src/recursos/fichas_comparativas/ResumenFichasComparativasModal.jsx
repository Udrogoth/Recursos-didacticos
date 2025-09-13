import { NavLink } from 'react-router-dom';

export default function ResumenFichasComparativasModal({ cerrar }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-xl shadow-lg transition">
        <h2 className="text-2xl font-bold mb-4">📚 ¿Por qué estas fichas facilitan el aprendizaje?</h2>
        <ul className="list-disc pl-5 space-y-3 text-sm">
          <li>
            <strong>Comparación estructurada:</strong> Permiten visualizar diferencias entre modelos pedagógicos en criterios clave.
          </li>
          <li>
            <strong>Claridad visual:</strong> El formato modular facilita la comprensión rápida y la organización cognitiva.
          </li>
          <li>
            <strong>Transferencia institucional:</strong> Las fichas pueden integrarse fácilmente en clases, capacitaciones o dashboards.
          </li>
          <li>
            <strong>Activación reflexiva:</strong> Invitan a analizar qué modelo se adapta mejor a cada contexto educativo.
          </li>
          <li>
            <strong>Preparación para el juego:</strong> Funcionan como base conceptual antes de aplicar la lógica de asociación.
          </li>
        </ul>

        {/* Navegación hacia recursos relacionados */}
        <div className="mt-8 space-y-3 text-sm text-center">
          <NavLink
            to="/fichas-comparativas"
            className="block text-indigo-600 hover:underline"
          >
            🔍 Ver fichas comparativas
          </NavLink>
          <NavLink
            to="/juegos-asociacion"
            className="block text-indigo-600 hover:underline"
          >
            🎮 Ir al juego de asociación
          </NavLink>
          <NavLink
            to="/dashboards-pedagogicos"
            className="block text-indigo-600 hover:underline"
          >
            📈 Explorar dashboards temáticos
          </NavLink>
        </div>

        {/* Botón de cierre */}
        <div className="text-center mt-6">
          <button
            onClick={cerrar}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Cerrar resumen
          </button>
        </div>
      </div>
    </div>
  );
}
