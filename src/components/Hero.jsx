export default function Hero() {
  return (
    <section className="min-h-screen px-6 py-16 flex flex-col items-center justify-center text-center
                        bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Recursos didácticos que transforman el aprendizaje
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Descubre materiales visuales, simuladores interactivos y narrativas técnicas diseñadas para facilitar la comprensión, fomentar la reflexión y potenciar la autonomía del estudiante.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/simulador"
          className="px-6 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Explorar Simulador
        </a>
        <a
          href="/narrativa"
          className="px-6 py-3 rounded bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white
                   hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          Ver Narrativa Técnica
        </a>
      </div>
    </section>
  );
}