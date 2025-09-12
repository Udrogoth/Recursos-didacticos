export default function ModalError({ mensaje, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg max-w-sm text-center">
          <h2 className="text-xl font-bold mb-4">❌ Asociación incorrecta</h2>
          <p className="mb-6">{mensaje}</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }