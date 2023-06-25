import React, { createContext, useState } from 'react';

// Create a new context
const GenerationContext = createContext({
  generationState: false,
  setGeneratingState: () => {},
});

// Create a provider component for the context
const GenerationProvider = ({ children }) => {
  const [generationState, setInGeneration] = useState(false);

  const setGeneratingState = (value) => {
    setInGeneration(value);
  };

  return (
    <GenerationContext.Provider value={{ generationState, setGeneratingState }}>
      {children}
    </GenerationContext.Provider>
  );
};

export { GenerationContext, GenerationProvider };