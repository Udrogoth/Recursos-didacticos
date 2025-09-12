import { useState } from 'react';
import SimuladorNarrativo from '../components/SimuladorNarrativo';
import ResumenModal from '../components/ResumenModal';

export default function SimuladorPage() {
  const [mostrarResumen, setMostrarResumen] = useState(false);

  return (
    <div className="min-h-screen px-6 py-12 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Simulador Narrativo</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explora procesos técnicos o pedagógicos paso a paso, con retroalimentación inmediata y narrativa guiada.
        </p>

        <button
          onClick={() => setMostrarResumen(true)}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Ver resumen pedagógico
        </button>
      </header>

      <SimuladorNarrativo />

      {mostrarResumen && <ResumenModal cerrar={() => setMostrarResumen(false)} />}
    </div>
  );
}