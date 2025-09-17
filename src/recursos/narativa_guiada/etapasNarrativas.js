export const etapasNarrativas = [
  {
    id: 1,
    titulo: 'Inicio del proceso',
    descripcion: 'Se presenta el contexto inicial de una decisión pedagógica.',
    pregunta: '¿Qué elemento debe considerarse primero?',
    imagen: 'https://images.unsplash.com/photo-1544322477-90c74f07a09c', // ✅ Imagen añadida
    opciones: [
      { texto: 'Objetivo de aprendizaje', retro: '✅ Correcto: define la dirección del diseño.' },
      { texto: 'Evaluación final', retro: '❌ Aún no se ha definido qué se quiere lograr.' },
      { texto: 'Recursos disponibles', retro: '❌ Importante, pero no es el punto de partida.' },
    ],
  },
  {
    id: 2,
    titulo: 'Diseño de la actividad',
    descripcion: 'Se plantea cómo se desarrollará la experiencia de aprendizaje.',
    pregunta: '¿Qué enfoque favorece la comprensión activa?',
    imagen: 'https://images.unsplash.com/photo-1594154406245-c49c716e2a27', // ✅ Imagen añadida
    opciones: [
      { texto: 'Exposición magistral', retro: '❌ Puede ser útil, pero limita la participación.' },
      { texto: 'Aprendizaje basado en problemas', retro: '✅ Promueve reflexión y aplicación contextual.' },
      { texto: 'Lectura autónoma sin guía', retro: '❌ Riesgo de desconexión o sobrecarga.' },
    ],
  },
  {
    id: 3,
    titulo: 'Retroalimentación',
    descripcion: 'Se define cómo se dará respuesta a las acciones del estudiante.',
    pregunta: '¿Qué tipo de retroalimentación es más efectiva?',
    imagen: 'https://images.unsplash.com/photo-1582213782179-e0d5333f27de', // ✅ Imagen añadida
    opciones: [
      { texto: 'Genérica', retro: '❌ No aporta información útil.' },
      { texto: 'Inmediata y específica', retro: '✅ Refuerza el aprendizaje activo.' },
      { texto: 'Diferida', retro: '❌ Pierde oportunidad de corrección inmediata.' },
    ],
  },
];