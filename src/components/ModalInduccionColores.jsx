export default function ModalInduccionColores({ cerrar }) {
  const colores = [
    { emoji: '🔴', nombre: 'Red' },
    { emoji: '🔵', nombre: 'Blue' },
    { emoji: '🟡', nombre: 'Yellow' },
    { emoji: '🟢', nombre: 'Green' },
    { emoji: '🟠', nombre: 'Orange' },
    { emoji: '🟣', nombre: 'Purple' },
    { emoji: '⚫', nombre: 'Black' },
    { emoji: '⚪', nombre: 'White' },
    { emoji: '🟤', nombre: 'Brown' },
    { emoji: '🩷', nombre: 'Pink' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-md sm:max-w-xl rounded-lg shadow-lg overflow-hidden">
        <div className="max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center">🎨 Aprende los colores</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 text-center">
            Familiarízate con los colores y sus nombres antes de comenzar el juego.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center text-base sm:text-lg">
            {colores.map(({ emoji, nombre }) => (
              <div
                key={nombre}
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-2xl sm:text-3xl mb-1">{emoji}</div>
                <div className="font-semibold text-indigo-600 dark:text-indigo-400">{nombre}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button
              onClick={cerrar}
              className="w-full sm:w-auto px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              ¡Estoy listo para jugar!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}