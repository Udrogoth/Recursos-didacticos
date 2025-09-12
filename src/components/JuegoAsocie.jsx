import { useState } from 'react';
import ModalError from './ModalError';
import ModalCorrecto from './ModalCorrecto';

const paresBase = [
    {
      id: 1,
      concepto: 'Tarjeta modular',
      descripcion: 'Estructura visual que permite comparar elementos de forma clara.',
      categoria: 'Visual',
    },
    {
      id: 2,
      concepto: 'Secuencia narrativa',
      descripcion: 'Presentación lineal que guía al usuario por un proceso o historia.',
      categoria: 'Narrativa',
    },
    {
      id: 3,
      concepto: 'Flujo técnico',
      descripcion: 'Representación de pasos lógicos en un proceso técnico.',
      categoria: 'Simulador',
    },
    {
      id: 4,
      concepto: 'Retroalimentación inmediata',
      descripcion: 'Respuesta automática que refuerza el aprendizaje activo.',
      categoria: 'Simulador',
    },
    {
      id: 5,
      concepto: 'Exploración guiada',
      descripcion: 'Recorrido estructurado que permite descubrir conceptos paso a paso.',
      categoria: 'Narrativa',
    },
    {
      id: 6,
      concepto: 'Clasificación libre',
      descripcion: 'Organización de elementos según criterios definidos por el usuario.',
      categoria: 'Visual',
    },
  ];
  
  const mezclarTarjetas = (array) => [...array].sort(() => Math.random() - 0.5);
  
  export default function JuegoAsocie({ activarJuego }) {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [tarjetas, setTarjetas] = useState([]);
    const [seleccionados, setSeleccionados] = useState([]);
    const [modalError, setModalError] = useState(false);
    const [modalCorrecto, setModalCorrecto] = useState(false);
  
    const iniciarJuego = () => {
      setJuegoIniciado(true);
      activarJuego();
      setSeleccionados([]);
      setModalError(false);
      setModalCorrecto(false);
      setTarjetas(mezclarTarjetas(paresBase));
    };
  
    const manejarSeleccion = (concepto) => {
      if (!juegoIniciado) return;
  
      const nuevaSeleccion = [...seleccionados, concepto];
      setSeleccionados(nuevaSeleccion);
  
      if (nuevaSeleccion.length === 2) {
        const [a, b] = nuevaSeleccion;
        const esCorrecto = a.categoria === b.categoria && a.id !== b.id;
  
        if (esCorrecto) {
          setModalCorrecto(true);
        } else {
          setModalError(true);
        }
  
        setTimeout(() => setSeleccionados([]), 1000);
      }
    };
  
    return (
      <section className="mt-12 px-6 py-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition">
        <h2 className="text-xl font-bold mb-4 text-center">Juego de Asociación</h2>
        <p className="text-sm text-center mb-6">
          Selecciona dos conceptos que pertenezcan a la misma categoría pedagógica.
        </p>
  
        {!juegoIniciado ? (
          <div className="text-center">
            <button
              onClick={iniciarJuego}
              className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Comenzar juego
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tarjetas.map((item) => {
                const estaSeleccionado = seleccionados.some((sel) => sel.id === item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => manejarSeleccion(item)}
                    className={`px-4 py-3 rounded shadow transition text-left ${
                      estaSeleccionado
                        ? 'bg-indigo-300 dark:bg-indigo-700 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-700'
                    }`}
                  >
                    <span className="font-semibold block">{item.concepto}</span>
                    <span className="text-xs opacity-80">{item.descripcion}</span>
                  </button>
                );
              })}
            </div>
  
            {modalError && (
              <ModalError
                mensaje="Los conceptos seleccionados no pertenecen a la misma categoría. Intenta nuevamente."
                onClose={() => setModalError(false)}
              />
            )}
  
            {modalCorrecto && (
              <ModalCorrecto
                mensaje="¡Bien hecho! Los conceptos pertenecen a la misma categoría."
                onClose={() => setModalCorrecto(false)}
              />
            )}
          </>
        )}
      </section>
    );
  }
  