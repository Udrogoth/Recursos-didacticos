import React from 'react';

const FeedbackDisplay = ({ feedbackText, analysis, isCorrect, onContinue, onRestart, showRetryButton }) => {
  const containerClass = isCorrect
    ? "bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md"
    : "bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-md";

  const icon = isCorrect
    ? "✅"
    : "❌";

  const isFinalScene = !onContinue || (isCorrect && !showRetryButton);

  return (
    <div className={containerClass}>
      <h3 className="font-bold text-xl flex items-center mb-2">
        <span className="mr-2 text-2xl">{icon}</span> {isCorrect ? '¡Excelente!' : '¡Oops!'}
      </h3>
      <p className="mb-4 leading-relaxed">{feedbackText}</p>
      <div className="border-t border-gray-300 pt-4 mt-4">
        <p className="font-semibold text-sm">Análisis Pedagógico:</p>
        <p className="text-gray-600 text-sm mt-1">{analysis}</p>
      </div>
      
      {showRetryButton ? (
        <button
          onClick={onContinue}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Re-intentar
        </button>
      ) : (
        <div className="flex justify-between items-center mt-6">
            <button
              onClick={onContinue}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Continuar
            </button>
            <button
              onClick={onRestart}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Reiniciar Simulación
            </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackDisplay;