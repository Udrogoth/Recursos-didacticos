
import { useState } from "react";
import FichasComparativas from "./FichaComparativa";
import JuegoAsocie from "../juegos_asociaciones/JuegoAsocie";
import ResumenFichasComparativasModal from "./ResumenFichasComparativasModal";

export default function FichasPage() {
  const [juegoActivo, setJuegoActivo] = useState(false);
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const criterios = ['estructura', 'interacción', 'transferencia'];

  const modelos = [
    {
      nombre: 'Modelo Visual',
      estructura: 'Tarjetas modulares',
      interacción: 'Clasificación libre',
      transferencia: 'Alta reutilización institucional',
      descripcion: 'Ideal para representar conceptos de forma clara y flexible. Favorece la comparación visual y la organización cognitiva.',
    },
    {
      nombre: 'Modelo Narrativo',
      estructura: 'Secuencia lineal',
      interacción: 'Exploración guiada',
      transferencia: 'Adaptable por nivel',
      descripcion: 'Presenta contenidos como historias o procesos secuenciales. Facilita la comprensión progresiva y contextualizada.',
    },
    {
      nombre: 'Modelo Simulador',
      estructura: 'Flujo técnico',
      interacción: 'Retroalimentación inmediata',
      transferencia: 'Escalable por contexto',
      descripcion: 'Permite experimentar procesos técnicos o decisiones. Refuerza el aprendizaje activo mediante simulación y respuesta directa.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-12 transition-colors duration-300">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Fichas Visuales Comparativas</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explora modelos pedagógicos a través de fichas visuales que permiten comparar estructura, interacción y transferencia.
        </p>

        <button
          onClick={() => setMostrarResumen(true)}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Ver resumen pedagógico
        </button>
      </header>

      {!juegoActivo && (
        <FichasComparativas
          titulo="Comparación de Modelos de Aprendizaje"
          criterios={criterios}
          items={modelos}
        />
      )}

      <JuegoAsocie activarJuego={() => setJuegoActivo(true)} />

      <div className="text-center mt-8 flex flex-col gap-4 items-center">
        {juegoActivo ? (
          <button
            onClick={() => setJuegoActivo(false)}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Mostrar fichas nuevamente
          </button>
        ) : (
          <button
            onClick={() => setJuegoActivo(true)}
            className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Volver a comenzar juego
          </button>
        )}
      </div>

      {mostrarResumen && (
        <ResumenFichasComparativasModal cerrar={() => setMostrarResumen(false)} />
      )}
    </div>
  );
}