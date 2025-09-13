const narrativeContent = {
    scenes: {
      'intro': {
        text: "Estás en plena clase, pero notas que la atención de tus estudiantes se disipa rápidamente. Necesitas actuar ya. ¿Qué haces?",
        image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Estudiantes distraídos en un aula
        options: [
          { id: 'optA', text: 'Dar un discurso enérgico sobre la importancia de la clase.', nextScene: 'feedbackA_path' },
          { id: 'optB', text: 'Proponer una actividad rápida de discusión en parejas.', nextScene: 'feedbackB_path' }
        ]
      },
      'feedbackA_path': {
        text: "¡Ups! Un discurso enérgico generó más resistencia. Los estudiantes se sienten regañados y el murmullo aumenta. La situación se ha vuelto más tensa.",
        type: 'feedback',
        analysis: 'Principio pedagógico: El castigo verbal puede dañar el clima del aula y rara vez resuelve la raíz de la distracción. Se perdió el "momentum" del aprendizaje.',
        isCorrect: false,
        reframe: {
          text: "Ahora que sabes que tu estrategia no funcionó, ¿qué harías diferente? Solo tienes una oportunidad más.",
          nextScene: 'reframe_1'
        }
      },
      'reframe_1': {
        text: "El ambiente está pesado. Ves que un par de estudiantes están a punto de discutir. ¿Qué haces?",
        image: 'https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Tensión entre estudiantes
        options: [
          { id: 'optA_1', text: 'Llamarles la atención en voz alta para que se detengan.', nextScene: 'feedbackA_reframe_fail' },
          { id: 'optA_2', text: 'Acercarte a su mesa y hablarles en voz baja.', nextScene: 'feedback_reframe_positive' }
        ]
      },
      'feedbackA_reframe_fail': {
          text: "La clase se sintió aún más expuesta y la situación escaló a una confrontación. Has perdido el control del aula. Sin embargo, el simulador continúa para que puedas aprender del siguiente escenario.",
          type: 'feedback',
          analysis: 'Principio pedagógico: El manejo público de conflictos puede causar una escalada innecesaria. Se debe buscar la discreción.',
          isCorrect: false,
          nextScene: 'scene2_challenge'
      },
      'feedback_reframe_positive': {
          text: "Acercarte y hablarles en voz baja demostró empatía y desescaló la situación. Has evitado un conflicto. ¡Excelente, continuemos!",
          type: 'feedback',
          analysis: 'Principio pedagógico: Manejo del aula no confrontacional. Tu acción preservó la dignidad del estudiante.',
          isCorrect: true,
          nextScene: 'scene2_challenge'
      },
      
      'feedbackB_path': {
        text: "¡Excelente! Al pedirles que se muevan y colaboren, rompiste el patrón de pasividad. Su atención se reinició. Este es un ejemplo de 'Activación Cognitiva' y 'Cambio de Estado'.",
        type: 'feedback',
        analysis: 'Principio pedagógico: Activación Cognitiva, Cambio de Estado, Aprendizaje Colaborativo.',
        isCorrect: true,
        nextScene: 'scene2_challenge'
      },
      'scene2_challenge': {
          text: "La atención ha regresado, pero el tema es complejo. Un estudiante te dice: 'No entiendo nada'. ¿Cómo respondes para no perder el impulso?",
          image: 'https://images.pexels.com/photos/3771092/pexels-photo-3771092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Un estudiante con una expresión de confusión
          options: [
              { id: 'optC', text: 'Recomendarle que repase el material en casa.', nextScene: 'feedbackC_path' },
              { id: 'optD', text: 'Usar una analogía o un ejemplo simple para conectar con algo que ya conoce.', nextScene: 'feedbackD_path' }
          ]
      },
      'feedbackC_path': {
        text: "Aunque es válido, no es una respuesta inmediata. El estudiante podría sentirse desmotivado. Es crucial abordar su confusión en el momento para mantener la conexión.",
        type: 'feedback',
        analysis: 'Principio pedagógico: Retroalimentación inmediata y andamiaje.',
        isCorrect: false,
        reframe: {
          text: "Esa opción no es la ideal. ¿Hay alguna forma de ayudar al estudiante *ahora mismo*?",
          nextScene: 'reframe_2'
        }
      },
      'reframe_2': {
        text: "¿Qué haces para ayudar al estudiante a entender el concepto en este momento?",
        image: 'https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Un maestro con un estudiante, en un momento de andamiaje
        options: [
          { id: 'optD_reframe', text: 'Usar una analogía o un ejemplo simple para conectar con algo que ya conoce.', nextScene: 'feedbackD_path' },
          { id: 'optC_reframe', text: 'Repetir la explicación inicial de forma más lenta.', nextScene: 'feedbackC_reframe_fail'}
        ]
      },
      'feedbackC_reframe_fail': {
        text: "Repetir la explicación no ayudó. La clase se aburrió y el estudiante se sintió frustrado. Sin embargo, el simulador continúa para que puedas aprender del siguiente escenario.",
        type: 'feedback',
        analysis: 'Principio pedagógico: La repetición no garantiza la comprensión. Se debe buscar un enfoque diferente.',
        isCorrect: false,
        nextScene: 'final_challenge'
      },
      'feedbackD_path': {
        text: "¡Genial! Usar una analogía o un ejemplo es una excelente forma de 'andamiaje'. Conectas el nuevo conocimiento con lo que el estudiante ya sabe, facilitando la comprensión y demostrando que valoras su pregunta.",
        type: 'feedback',
        analysis: 'Principio pedagógico: Andamiaje y Conexión de conocimiento previo.',
        isCorrect: true,
        nextScene: 'final_challenge'
      },
      'final_challenge': {
          text: "El resto de la clase muestra interés en tu analogía. Un estudiante brillante levanta la mano y pregunta, '¿Y cómo se relaciona esto con el concepto X que vimos la semana pasada?'. Te ha hecho una pregunta de nivel superior. ¿Cómo respondes?",
          image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Estudiantes trabajando en grupo, colaboración
          options: [
              { id: 'optE', text: 'Responde la pregunta brevemente y vuelve a la lección principal.', nextScene: 'end_story_neutral' },
              { id: 'optF', text: 'Anima a la clase a discutir la pregunta en pequeños grupos para encontrar la respuesta.', nextScene: 'end_story_positive' }
          ]
      },
      'end_story_positive': {
          text: "¡Victoria! Al hacer que los estudiantes discutan la pregunta, promoviste el 'Aprendizaje Colaborativo' y el 'Pensamiento de Orden Superior'. La clase no solo entendió el concepto, sino que también aplicó sus conocimientos de forma activa. ¡Simulación terminada con éxito!",
          type: 'feedback',
          analysis: 'Principios pedagógicos: Aprendizaje Activo, Pensamiento de Orden Superior y Evaluación Formativa.',
          isCorrect: true,
          nextScene: 'end_story'
      },
      'end_story_neutral': {
          text: "Lograste mantener a la clase atenta, pero perdiste una oportunidad de oro para promover el aprendizaje activo y el pensamiento crítico entre tus estudiantes. Simulación terminada.",
          type: 'feedback',
          analysis: 'Principio pedagógico: Perdiste una oportunidad de fomentar el Pensamiento de Orden Superior.',
          isCorrect: false,
          nextScene: 'end_story'
      },
      'end_story': {
        text: "¡Fin de la simulación! Has completado el recorrido. Recuerda que cada decisión cuenta en el aula. Continúa practicando para perfeccionar tus habilidades.",
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Clase feliz y comprometida
        options: []
      }
    }
  };
  
  export default narrativeContent;