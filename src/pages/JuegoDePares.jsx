import { useState, useEffect } from 'react';

// Modal de inducción visual
function ModalInduccionColores({ cerrar }) {
  const colores = [
    { color: '#ff0000', nombre: 'Red' },
    { color: '#0000ff', nombre: 'Blue' },
    { color: '#ffff00', nombre: 'Yellow' },
    { color: '#00ff00', nombre: 'Green' },
    { color: '#ffa500', nombre: 'Orange' },
    { color: '#800080', nombre: 'Purple' },
    { color: '#000000', nombre: 'Black' },
    { color: '#ffffff', nombre: 'White', borde: true },
    { color: '#8b4513', nombre: 'Brown' },
    { color: '#ffc0cb', nombre: 'Pink' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-xl shadow-lg transition">
        <h2 className="text-2xl font-bold mb-4 text-center">🎨 Inducción: Aprende los colores en inglés</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 text-center">
          Familiarízate con los colores y sus nombres antes de comenzar el juego.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-lg">
          {colores.map(({ color, nombre, borde }) => (
            <div
              key={nombre}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div
                className={`w-8 h-8 mx-auto mb-2 rounded-full ${borde ? 'border border-gray-400' : ''}`}
                style={{ backgroundColor: color }}
              ></div>
              <div className="font-semibold text-indigo-600 dark:text-indigo-400">{nombre}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={cerrar}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            ¡Estoy listo para jugar!
          </button>
        </div>
      </div>
    </div>
  );
}

// Juego principal
export default function JuegoColoresIngles() {
    const paresColores = [
        { id: 1, contenido: '🔴', pareja: 'Red' },
        { id: 2, contenido: '🔵', pareja: 'Blue' },
        { id: 3, contenido: '🟡', pareja: 'Yellow' },
        { id: 4, contenido: '🟢', pareja: 'Green' },
        { id: 5, contenido: '🟠', pareja: 'Orange' },
        { id: 6, contenido: '🟣', pareja: 'Purple' },
        { id: 7, contenido: '⚫', pareja: 'Black' },
        { id: 8, contenido: '⚪', pareja: 'White' },
        { id: 9, contenido: '🟤', pareja: 'Brown' },
        { id: 10, contenido: '🩷', pareja: 'Pink' }, // ← rosa restaurado
        { id: 11, contenido: 'Red', pareja: '🔴' },
        { id: 12, contenido: 'Blue', pareja: '🔵' },
        { id: 13, contenido: 'Yellow', pareja: '🟡' },
        { id: 14, contenido: 'Green', pareja: '🟢' },
        { id: 15, contenido: 'Orange', pareja: '🟠' },
        { id: 16, contenido: 'Purple', pareja: '🟣' },
        { id: 17, contenido: 'Black', pareja: '⚫' },
        { id: 18, contenido: 'White', pareja: '⚪' },
        { id: 19, contenido: 'Brown', pareja: '🟤' },
        { id: 20, contenido: 'Pink', pareja: '🩷' }, // ← pareja rosa restaurada
      ];
      
  const mezclarCartas = (cartas) =>
    [...cartas].sort(() => Math.random() - 0.5).map((carta, index) => ({
      ...carta,
      key: index,
      volteada: false,
      encontrada: false,
    }));

  const [cartas, setCartas] = useState(mezclarCartas(paresColores));
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [mostrarInduccion, setMostrarInduccion] = useState(true);

  const manejarClick = (index) => {
    if (cartas[index].volteada || cartas[index].encontrada || seleccionadas.length === 2) return;

    const nuevasCartas = [...cartas];
    nuevasCartas[index].volteada = true;
    setCartas(nuevasCartas);
    setSeleccionadas([...seleccionadas, index]);
  };

  useEffect(() => {
    if (seleccionadas.length === 2) {
      const [i1, i2] = seleccionadas;
      const carta1 = cartas[i1];
      const carta2 = cartas[i2];

      const sonPareja =
        carta1.contenido === carta2.pareja || carta2.contenido === carta1.pareja;

      setTimeout(() => {
        const nuevasCartas = [...cartas];
        if (sonPareja) {
          nuevasCartas[i1].encontrada = true;
          nuevasCartas[i2].encontrada = true;
        } else {
          nuevasCartas[i1].volteada = false;
          nuevasCartas[i2].volteada = false;
        }
        setCartas(nuevasCartas);
        setSeleccionadas([]);
      }, 1000);
    }
  }, [seleccionadas, cartas]);

  const todasEncontradas = cartas.every((carta) => carta.encontrada);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 text-center">
      <h2 className="text-2xl font-bold mb-6">🎮 Empareja los colores con sus nombres en inglés</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Haz clic en dos cartas para encontrar la pareja correcta. Si no coinciden, se voltean.
      </p>

      <button
        onClick={() => setMostrarInduccion(true)}
        className="mb-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
      >
        🧠 ¿No conoces los colores? Ver inducción
      </button>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 justify-center">
        {cartas.map((carta, index) => (
          <div
            key={carta.key}
            onClick={() => manejarClick(index)}
            className={`w-20 h-20 flex items-center justify-center border rounded-lg text-xl cursor-pointer transition ${
              carta.volteada || carta.encontrada
                ? 'bg-white dark:bg-gray-800'
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
          >
            {carta.volteada || carta.encontrada ? carta.contenido : '❓'}
          </div>
        ))}
      </div>

      {todasEncontradas && (
        <div className="mt-6 text-green-600 font-semibold text-lg">
          ✅ ¡Todas las parejas encontradas!
        </div>
      )}

      {mostrarInduccion && (
        <ModalInduccionColores cerrar={() => setMostrarInduccion(false)} />
      )}
    </section>
  );
}
