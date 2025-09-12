export default function ResumenModal({ cerrar }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-xl shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">🧩 ¿Por qué este simulador facilita el aprendizaje?</h2>
          <ul className="list-disc pl-5 space-y-3 text-sm">
            <li>
              <strong>Aprendizaje activo:</strong> El usuario toma decisiones, recibe retroalimentación y reflexiona sobre el proceso.
            </li>
            <li>
              <strong>Visualización progresiva:</strong> Cada paso representa una etapa concreta del proceso técnico o pedagógico.
            </li>
            <li>
              <strong>Transferencia contextual:</strong> El simulador permite aplicar conocimientos en situaciones reales o simuladas.
            </li>
            <li>
              <strong>Evaluación formativa:</strong> La retroalimentación inmediata refuerza la comprensión sin necesidad de pruebas externas.
            </li>
            <li>
              <strong>Modularidad:</strong> Cada paso puede adaptarse, escalarse o integrarse en otros recursos didácticos.
            </li>
          </ul>
  
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