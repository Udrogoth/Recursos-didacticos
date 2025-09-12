export default function PageEnConstruccion() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">🚧 Página en construcción</h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          Estamos trabajando para crear un espacio pedagógico claro, modular y visualmente potente. Pronto podrás explorar este recurso con fichas, simuladores y narrativas técnicas.
        </p>
        <div className="flex gap-4">
          <a
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Volver al inicio
          </a>
          <a
            href="/fichas"
            className="px-6 py-3 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            Ver fichas disponibles
          </a>
        </div>
      </section>
    );
  }