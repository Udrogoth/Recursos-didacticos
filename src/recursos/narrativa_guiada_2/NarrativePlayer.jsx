import React, { useState } from 'react';
import NarrativeScene from './NarrativeScene';
import DecisionOptions from './DecisionOptions';
import FeedbackDisplay from './FeedbackDisplay';
import narrativeContent from '../narrativa_guiada_2/narrativeContent';

const NarrativePlayer = () => {
  const [currentSceneId, setCurrentSceneId] = useState('intro');
  const [lastFeedback, setLastFeedback] = useState(null);

  const currentScene = narrativeContent.scenes[currentSceneId];

  const handleDecision = (optionId) => {
    const chosenOption = currentScene.options.find(opt => opt.id === optionId);
    if (chosenOption && chosenOption.nextScene) {
      const nextSceneData = narrativeContent.scenes[chosenOption.nextScene];
      if (nextSceneData.type === 'feedback') {
        setLastFeedback(nextSceneData);
      } else {
        setLastFeedback(null);
      }
      setCurrentSceneId(chosenOption.nextScene);
    }
  };

  const handleContinue = () => {
    if (lastFeedback && lastFeedback.reframe) {
      // Si hay un re-intento, carga la escena de re-intento
      setCurrentSceneId(lastFeedback.reframe.nextScene);
      setLastFeedback(null);
    } else if (lastFeedback && lastFeedback.nextScene) {
      // Si es una respuesta correcta o un re-intento fallido, continúa
      setCurrentSceneId(lastFeedback.nextScene);
      setLastFeedback(null);
    }
  };

  const handleRestart = () => {
    setCurrentSceneId('intro');
    setLastFeedback(null);
  };

  if (!currentScene) {
    return <div className="text-center text-gray-500">Narrativa terminada. ¡Gracias por participar!</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white shadow-lg rounded-lg mt-8">
      {lastFeedback ? (
        <FeedbackDisplay
          feedbackText={lastFeedback.text}
          analysis={lastFeedback.analysis}
          isCorrect={lastFeedback.isCorrect}
          onContinue={handleContinue}
          onRestart={handleRestart} // Pasamos la función de reinicio
          showRetryButton={!lastFeedback.isCorrect && lastFeedback.reframe}
        />
      ) : (
        <>
          <NarrativeScene
            text={currentScene.text}
            image={currentScene.image}
          />
          {currentScene.options && (
            <DecisionOptions
              options={currentScene.options}
              onDecisionMade={handleDecision}
            />
          )}
        </>
      )}
    </div>
  );
};

export default NarrativePlayer;