export default function ResumenNarrativaModal({ cerrar }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-xl shadow-lg transition">
        <h2 className="text-2xl font-bold mb-4">📘 ¿Por qué esta narrativa guiada facilita el aprendizaje?</h2>
        <ul className="list-disc pl-5 space-y-3 text-sm">
          <li><strong>Diseño instruccional reflexivo:</strong> El usuario toma decisiones clave sobre cómo estructurar, activar y retroalimentar el aprendizaje.</li>
          <li><strong>Retroalimentación inmediata:</strong> Cada elección activa una respuesta que refuerza la comprensión pedagógica y corrige errores conceptuales.</li>
          <li><strong>Aplicación contextual:</strong> Representa situaciones reales que enfrentan docentes y diseñadores educativos.</li>
          <li><strong>Activación cognitiva:</strong> Estimula el pensamiento crítico sobre estrategias, secuencias y evaluación formativa.</li>
          <li><strong>Modularidad:</strong> Cada etapa puede integrarse en fichas, dashboards o juegos reflexivos, facilitando la transferencia institucional.</li>
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