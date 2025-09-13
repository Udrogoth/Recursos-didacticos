import React from 'react';

const DecisionOptions = ({ options, onDecisionMade }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {options.map(option => (
        <button
          key={option.id}
          onClick={() => onDecisionMade(option.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default DecisionOptions;