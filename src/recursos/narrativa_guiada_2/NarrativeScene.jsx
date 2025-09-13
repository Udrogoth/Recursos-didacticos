import React from 'react';

const NarrativeScene = ({ text, image }) => {
  const isVideo = image && (image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.mov'));

  return (
    <div className="flex flex-col items-center">
      {image && (
        isVideo ? (
          <video
            src={image}
            alt="Escena de la narrativa"
            className="w-full h-64 object-cover rounded-md mb-4"
            autoPlay 
            loop 
            muted 
          />
        ) : (
          <img
            src={image}
            alt="Escena de la narrativa"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )
      )}
      <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
        {text}
      </p>
    </div>
  );
};

export default NarrativeScene;