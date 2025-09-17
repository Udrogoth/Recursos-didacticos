import React, { useState, useEffect } from 'react';

export default function ResumenNarrativaModal({ cerrar }) {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleSpeech = () => {
      // ✅ Mejoras: busca una voz más natural (ej. Google)
      const voices = speechSynthesis.getVoices();
      const spanishVoice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('es-')) ||
        voices.find(v => v.lang.startsWith('es-'));

      const modalContent = document.getElementById('resumen-narrativa-modal-content');
      const textToSpeak = Array.from(modalContent.querySelectorAll('h2, li'))
        .map(el => el.textContent.trim())
        .join('. ');

      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      utterance.voice = spanishVoice;
      utterance.pitch = 1.1; // Ajusta el tono para que suene más natural
      utterance.rate = 1.1; // Ajusta la velocidad

      speechSynthesis.speak(utterance);

      utterance.onend = () => {
        setIsReading(false);
      };
    };

    if (isReading && !isPaused) {
      // Espera a que las voces carguen antes de iniciar
      const voicesCheck = setInterval(() => {
        if (speechSynthesis.getVoices().length > 0) {
          handleSpeech();
          clearInterval(voicesCheck);
        }
      }, 50);
    }

    if (isPaused) {
      speechSynthesis.pause();
    } else if (isReading) {
      speechSynthesis.resume();
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [isReading, isPaused]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        speechSynthesis.cancel();
        cerrar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [cerrar]);

  const manejarCierre = (e) => {
    speechSynthesis.cancel();
    cerrar();
  };

  return (
    <div
      className="fixed inset-0 bg-[var(--color-bg)] bg-opacity-50  flex items-center justify-center z-50 p-4"
      onClick={manejarCierre}
    >
      <div
        id="resumen-narrativa-modal-content"
        className="bg-gray-700 text-[var(--color-text)] p-6 rounded-lg max-w-xl shadow-lg transition-colors duration-300"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">¿Por qué esta narrativa guiada facilita el aprendizaje?</h2>
        <ul className="list-disc pl-5 space-y-3 text-sm">
          <li><strong>Diseño instruccional reflexivo:</strong> El usuario toma decisiones clave sobre cómo estructurar, activar y retroalimentar el aprendizaje.</li>
          <li><strong>Retroalimentación inmediata:</strong> Cada elección activa una respuesta que refuerza la comprensión pedagógica y corrige errores conceptuales.</li>
          <li><strong>Aplicación contextual:</strong> Representa situaciones reales que enfrentan docentes y diseñadores educativos.</li>
          <li><strong>Activación cognitiva:</strong> Estimula el pensamiento crítico sobre estrategias, secuencias y evaluación formativa.</li>
          <li><strong>Modularidad:</strong> Cada etapa puede integrarse en fichas, dashboards o juegos reflexivos, facilitando la transferencia institucional.</li>
        </ul>

        <div className="text-center mt-6 flex justify-center gap-4">
          {!isReading && !isPaused ? (
            <button
              onClick={() => setIsReading(true)}
              className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              ▶️ Leer
            </button>
          ) : isReading && !isPaused ? (
            <button
              onClick={() => setIsPaused(true)}
              className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
            >
              ⏸️ Pausar
            </button>
          ) : (
            <button
              onClick={() => setIsPaused(false)}
              className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              ▶️ Continuar
            </button>
          )}

        </div>
        <div className="text-center mt-6 flex justify-center gap-4">
          <button
            onClick={manejarCierre}
            className="px-6 py-2 w-75 mt-4  bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}