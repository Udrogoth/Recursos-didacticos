import { useState, useEffect, useRef } from 'react';

export default function JuegoColoresIngles() {
  const colores = [
    { color: '#ff0000', nombre: 'Red', emoji: '🔴' },
    { color: '#0000ff', nombre: 'Blue', emoji: '🔵' },
    { color: '#ffff00', nombre: 'Yellow', emoji: '🟡' },
    { color: '#00ff00', nombre: 'Green', emoji: '🟢' },
    { color: '#ffa500', nombre: 'Orange', emoji: '🟠' },
    { color: '#800080', nombre: 'Purple', emoji: '🟣' },
    { color: '#000000', nombre: 'Black', emoji: '⚫' },
    { color: '#ffffff', nombre: 'White', emoji: '⚪', borde: true },
    { color: '#8b4513', nombre: 'Brown', emoji: '🟤' },
    { color: '#ffc0cb', nombre: 'Pink', emoji: '🩷' },
  ];

  // Genera las cartas del juego a partir de los datos de colores
  const paresColores = colores.flatMap((c) => [
    { id: `e-${c.nombre}`, contenido: c.emoji, pareja: `n-${c.nombre}` },
    { id: `n-${c.nombre}`, contenido: c.nombre, pareja: `e-${c.nombre}` },
  ]);

  const mezclarCartas = (cartas) =>
    [...cartas].sort(() => Math.random() - 0.5).map((carta, index) => ({
      ...carta,
      volteada: false,
      encontrada: false,
    }));

  const [cartas, setCartas] = useState(mezclarCartas(paresColores));
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [mostrarInduccion, setMostrarInduccion] = useState(true);
  const modalRef = useRef(null);

  // Mapeo para obtener el color a partir del nombre
  const obtenerColorPorNombre = (nombre) => {
    const colorObj = colores.find(c => c.nombre === nombre);
    return colorObj ? colorObj.color : 'inherit';
  };

  const manejarClick = (id) => {
    const index = cartas.findIndex(carta => carta.id === id);
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

      const sonPareja = carta1.pareja === carta2.id;

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

  useEffect(() => {
    const cerrarPorClickFuera = (e) => {
      if (mostrarInduccion && modalRef.current && !modalRef.current.contains(e.target)) {
        setMostrarInduccion(false);
      }
    };
    document.addEventListener('mousedown', cerrarPorClickFuera);
    return () => document.removeEventListener('mousedown', cerrarPorClickFuera);
  }, [mostrarInduccion]);

  const todasEncontradas = cartas.every((carta) => carta.encontrada);

  const reiniciarJuego = () => {
    setCartas(mezclarCartas(paresColores));
    setSeleccionadas([]);
    setMostrarInduccion(false);
  };

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
        {cartas.map((carta) => (
          <div
            key={carta.id} // ✅ Mejorado: ID único
            onClick={() => manejarClick(carta.id)}
            className={`
              w-20 h-20 flex items-center justify-center border rounded-lg text-xl font-bold cursor-pointer transition transform hover:scale-105
              ${carta.volteada || carta.encontrada
                ? 'bg-white dark:bg-gray-800'
                : 'bg-gray-300 dark:bg-gray-700'
              }
            `}
            style={{
              color: (carta.volteada || carta.encontrada) && carta.contenido.length > 2
                ? obtenerColorPorNombre(carta.contenido)
                : 'inherit'
            }}
          >
            {carta.volteada || carta.encontrada ? carta.contenido : '❓'}
          </div>
        ))}
      </div>

      {todasEncontradas && (
        <div className="mt-6">
          <p className="text-green-600 font-semibold text-lg">
            ✅ ¡Todas las parejas encontradas!
          </p>
          <button
            onClick={reiniciarJuego}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Reiniciar Juego
          </button>
        </div>
      )}

      {mostrarInduccion && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto" onClick={() => setMostrarInduccion(false)}>
          <div className="mx-auto my-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4" onClick={e => e.stopPropagation()}>
            <div
              ref={modalRef}
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-4 text-center">🎨 Colores en inglés</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 text-center">
                  Familiarízate con los colores y sus nombres antes de comenzar el juego.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {colores.map(({ color, nombre, borde }) => (
                    <div
                      key={nombre}
                      className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${borde ? 'border border-gray-400' : ''}`}
                        style={{ backgroundColor: color }}
                      ></div>
                      <span
                        className="mt-1 text-sm font-medium"
                        style={{ color: color }} // ✅ Mejorado: El nombre del color tiene su color
                      >
                        {nombre}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setMostrarInduccion(false)}
                  className="w-full px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  ¡Estoy listo para jugar!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}