import { useState } from 'react';

export default function SimuladorNarrativo() {
  const [pasoActual, setPasoActual] = useState(0);
  const [seleccion, setSeleccion] = useState(null);

  const pasos = [
    {
      id: 1,
      titulo: 'Inicio del proceso',
      descripcion: 'Se presenta el contexto inicial del proceso técnico o pedagógico.',
      pregunta: '¿Qué elemento debe activarse primero?',
      opciones: [
        { texto: 'Entrada de datos', retro: '✅ Correcto: es el punto de partida lógico.' },
        { texto: 'Validación final', retro: '❌ Aún no hay datos que validar.' },
        { texto: 'Retroalimentación', retro: '❌ No hay acción previa que retroalimentar.' },
      ],
    },
    {
      id: 2,
      titulo: 'Validación intermedia',
      descripcion: 'Se verifica la consistencia de los datos ingresados.',
      pregunta: '¿Qué condición debe cumplirse para continuar?',
      opciones: [
        { texto: 'Datos incompletos', retro: '❌ No se puede validar sin datos completos.' },
        { texto: 'Formato válido', retro: '✅ Correcto: permite avanzar con seguridad.' },
        { texto: 'Error crítico', retro: '❌ Detendría el proceso.' },
      ],
    },
    {
      id: 3,
      titulo: 'Retroalimentación final',
      descripcion: 'Se genera una respuesta automática según el resultado del proceso.',
      pregunta: '¿Qué tipo de retroalimentación es más efectiva?',
      opciones: [
        { texto: 'Genérica', retro: '❌ No aporta información útil.' },
        { texto: 'Inmediata y específica', retro: '✅ Refuerza el aprendizaje activo.' },
        { texto: 'Diferida', retro: '❌ Pierde oportunidad de corrección inmediata.' },
      ],
    },
  ];

  const paso = pasos[pasoActual];

  const manejarSeleccion = (opcion) => {
    setSeleccion(opcion);
  };

  const avanzar = () => {
    setSeleccion(null);
    setPasoActual((prev) => Math.min(prev + 1, pasos.length - 1));
  };

  const reiniciar = () => {
    setPasoActual(0);
    setSeleccion(null);
  };

  return (
    <section className="max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-md transition">
      <h2 className="text-2xl font-bold mb-2">{paso.titulo}</h2>
      <p className="mb-4 text-sm opacity-80">{paso.descripcion}</p>

      <p className="mb-4 font-medium">{paso.pregunta}</p>
      <div className="flex flex-col gap-2 mb-4">
        {paso.opciones.map((opcion, i) => (
          <button
            key={i}
            onClick={() => manejarSeleccion(opcion)}
            className={`px-4 py-2 rounded border transition text-left ${
              seleccion?.texto === opcion.texto
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-700'
            }`}
          >
            <span className="font-semibold block">{opcion.texto}</span>
            {seleccion?.texto === opcion.texto && (
              <span className="text-xs opacity-80 block mt-1">{opcion.retro}</span>
            )}
          </button>
        ))}
      </div>

      {seleccion && pasoActual < pasos.length - 1 && (
        <div className="text-center">
          <button
            onClick={avanzar}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Siguiente paso
          </button>
        </div>
      )}

      {pasoActual === pasos.length - 1 && seleccion && (
        <div className="text-center mt-6">
          <button
            onClick={reiniciar}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Reiniciar simulador
          </button>
        </div>
      )}
    </section>
  );
}

/*
🧠 Pedagógico:
- Cada paso activa la toma de decisiones y la reflexión contextual.
- La retroalimentación inmediata refuerza el aprendizaje significativo.
- El simulador puede representar procesos reales, institucionales o técnicos.

🛠️ Técnico:
- El objeto `pasos` está embebido para facilitar edición y transferencia.
- Componentes desacoplados, listos para escalar con multimedia o lógica condicional.
- Compatible con tema claro/oscuro y diseño responsivo.
*/