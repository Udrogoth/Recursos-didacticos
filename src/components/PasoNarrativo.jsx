export default function PasoNarrativo({ paso, onAvanzar }) {
    const [seleccion, setSeleccion] = useState(null);
  
    const manejarSeleccion = (opcion) => {
      setSeleccion(opcion);
    };
  
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-md transition">
        <h2 className="text-2xl font-bold mb-2">{paso.titulo}</h2>
        <p className="mb-4 text-sm opacity-80">{paso.descripcion}</p>
  
        <p className="mb-4 font-medium">{paso.pregunta}</p>
        <div className="flex flex-col gap-2 mb-4">
          {paso.opciones.map((opcion, i) => (
            <button
              key={i}
              onClick={() => manejarSeleccion(opcion)}
              className={`px-4 py-2 rounded border transition text-left ${
                seleccion?.texto === opcion.texto
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-700'
              }`}
            >
              <span className="font-semibold block">{opcion.texto}</span>
              {seleccion?.texto === opcion.texto && (
                <span className="text-xs opacity-80 block mt-1">{opcion.retro}</span>
              )}
            </button>
          ))}
        </div>
  
        {seleccion && (
          <div className="text-center">
            <button
              onClick={onAvanzar}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Siguiente paso
            </button>
          </div>
        )}
      </div>
    );
  }