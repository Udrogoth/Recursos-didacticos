import { useState, useEffect } from 'react';
import { etapasNarrativas } from './etapasNarrativas';

export default function NarrativaGuiada({ setHistorialExterno }) {
  const [pasoActual, setPasoActual] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [historial, setHistorial] = useState([]);

  const paso = etapasNarrativas[pasoActual];

  const manejarSeleccion = (opcion) => {
    setSeleccion(opcion);
    const nuevoRegistro = {
      etapa: paso.titulo,
      pregunta: paso.pregunta,
      respuesta: opcion.texto,
      retro: opcion.retro,
    };
    const nuevoHistorial = [...historial, nuevoRegistro];
    setHistorial(nuevoHistorial);
    if (setHistorialExterno) setHistorialExterno(nuevoHistorial);
  };

  const avanzar = () => {
    setSeleccion(null);
    setPasoActual((prev) => prev + 1);
  };

  const reiniciar = () => {
    setPasoActual(0);
    setSeleccion(null);
    setHistorial([]);
    if (setHistorialExterno) setHistorialExterno([]);
  };

  return (
    <section className="max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-md transition">
      {pasoActual < etapasNarrativas.length ? (
        <>
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
            <div className="text-center mt-4">
              <button
                onClick={avanzar}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                {pasoActual < etapasNarrativas.length - 1 ? 'Siguiente paso' : 'Ver resumen'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">📝 Resumen de decisiones</h2>
          <ul className="space-y-4">
            {historial.map((item, index) => (
              <li key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">{item.etapa}</p>
                <p className="text-sm italic">{item.pregunta}</p>
                <p className="mt-1">
                  ✅ <span className="font-medium">{item.respuesta}</span>
                </p>
                <p className="text-xs opacity-80">{item.retro}</p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-6">
            <button
              onClick={reiniciar}
              className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Reiniciar narrativa
            </button>
          </div>
        </div>
      )}
    </section>
  );
}