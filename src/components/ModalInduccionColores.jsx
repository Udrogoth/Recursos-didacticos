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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-xl shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-center">🎨 Inducción: Aprende los colores</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 text-center">
            Antes de comenzar el juego, familiarízate con los colores y sus nombres en inglés.
          </p>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-lg">
            {colores.map(({ emoji, nombre }) => (
              <div
                key={nombre}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="font-semibold text-indigo-600 dark:text-indigo-400">{nombre}</div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-6">
            <button
              onClick={cerrar}
              className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              ¡Estoy listo para jugar!
            </button>
          </div>
        </div>
      </div>
    );
  }
  