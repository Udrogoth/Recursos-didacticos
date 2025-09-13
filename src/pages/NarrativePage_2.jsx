import React from 'react';
import NarrativePlayer from '../recursos/narrativa_guiada_2/NarrativePlayer'; 


const NarrativePage_2 = () => {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
            Simulador de Diseño Pedagógico
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Pon a prueba tus habilidades de enseñanza y toma de decisiones en este entorno interactivo.
          </p>
        </header>

        <main>
          <NarrativePlayer />
        </main>
      </div>
    </div>
  );
};

export default NarrativePage_2;