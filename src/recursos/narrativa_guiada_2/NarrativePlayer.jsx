import React, { useState, useEffect } from 'react';
import NarrativeScene from './NarrativeScene';
import DecisionOptions from './DecisionOptions';
import FeedbackDisplay from './FeedbackDisplay';
import narrativeContent from '../narrativa_guiada_2/narrativeContent';

const NarrativePlayer = () => {
  const [currentSceneId, setCurrentSceneId] = useState('intro');
  const [lastFeedback, setLastFeedback] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentScene = narrativeContent.scenes[currentSceneId];

  // Encuentra la mejor voz en español al cargar el componente
  useEffect(() => {
    if ('speechSynthesis' in window) {
      let selectedVoice = null;
      const voices = speechSynthesis.getVoices();
      selectedVoice = voices.find(voice => 
        voice.lang === 'es-ES' && (voice.name.includes('Google') || voice.name.includes('Microsoft'))
      );
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('es'));
      }
      window.spanishVoice = selectedVoice;
    }
  }, []);

  // Lógica de reproducción de voz
  const speakText = (text) => {
    if ('speechSynthesis' in window && window.spanishVoice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = window.spanishVoice;
      utterance.lang = 'es-ES';

      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };
    }
  };

  // Se activa cuando la escena cambia
  useEffect(() => {
    if (currentScene && currentScene.text) {
      speakText(currentScene.text);
    }
  }, [currentSceneId, currentScene]);

  // Maneja la acción del botón de voz (Reproducir/Detener)
  const toggleSpeech = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speakText(currentScene.text);
    }
  };

  const stopSpeech = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleDecision = (optionId) => {
    stopSpeech();
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
    stopSpeech();
    if (lastFeedback && lastFeedback.reframe) {
      setCurrentSceneId(lastFeedback.reframe.nextScene);
      setLastFeedback(null);
    } else if (lastFeedback && lastFeedback.nextScene) {
      setCurrentSceneId(lastFeedback.nextScene);
      setLastFeedback(null);
    }
  };

  const handleRestart = () => {
    stopSpeech();
    setCurrentSceneId('intro');
    setLastFeedback(null);
  };

  if (!currentScene) {
    return <div className="text-center text-[var(--color-text)]">Narrativa terminada. ¡Gracias por participar!</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-[var(--color-bg)] text-[var(--color-text)] shadow-lg rounded-lg mt-8 transition-colors duration-300">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSpeech}
          className="px-4 py-2 rounded-full text-sm bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
        >
          {isSpeaking ? '⏹️ Detener' : '▶️ Escuchar'}
        </button>
      </div>

      {lastFeedback ? (
        <FeedbackDisplay
          feedbackText={lastFeedback.text}
          analysis={lastFeedback.analysis}
          isCorrect={lastFeedback.isCorrect}
          onContinue={handleContinue}
          onRestart={handleRestart}
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