export default function FichasComparativas({ titulo, criterios, items }) {
  return (
    <section className="px-6 py-12 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{titulo}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.nombre}</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              {criterios.map((criterio, i) => (
                <li key={i}>
                  <strong>{criterio}:</strong> {item[criterio]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}