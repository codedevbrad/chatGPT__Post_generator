import React, { createContext, useState } from 'react';

const GenerationContext = createContext({
  // used to share state between 2 isolated components [ generating and when generation has been finished ].
  generationState: false,
  // What value is being passed and set?
  setGeneratingState: ( booleanCondition : boolean ) => {},
  // Lets previous generateComponent reset the button back to initial state.
  setGeneratingBackToInitial: ( ) => {}
});

// Create a provider component for the context
const GenerationProvider = ({ children }) => {
  const [generationState, setInGeneration] = useState(false);

  const setGeneratingState = ( booleanCondition : boolean ) => {
    setInGeneration( booleanCondition );
  };

  const setGeneratingBackToInitial = ( ) => {
    setInGeneration( false );
  }

  return (
    <GenerationContext.Provider value={{ generationState, setGeneratingState, setGeneratingBackToInitial }}>
      {children}
    </GenerationContext.Provider>
  );
};

export { GenerationContext, GenerationProvider };