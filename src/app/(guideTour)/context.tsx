'use client'
import React, { createContext, useState, ReactNode } from 'react'

interface Step {
  title: string;
  explanation: string;
  id: string;
  action: () => void;
}

interface GuideContextType {
  currentStep: number;
  steps: Step[];
  show: boolean;
  currentStepObj: object
  updateGuideStep: (step: number) => void;
  updateGuideShow: (show: boolean) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  completeTour: () => void;
}


export const GuideContext = createContext<GuideContextType>({
  currentStep: 0,
  steps: [],
  show: false,
  currentStepObj: {},
  updateGuideStep: () => {},
  updateGuideShow: () => {},
  handlePreviousStep: () => {},
  handleNextStep: () => {},
  completeTour: () => {},
});


interface GuideProviderProps {
  children: ReactNode;
}


const GuideProvider: React.FC<GuideProviderProps> = ({ children }) => {
  const [ currentStep, setCurrentStep ] = useState(-1);
  const [ show, setShow ] = useState(true);

  const [ steps , updateSteps ] = useState([
    {
      explanation: 'Write your prompt!',
      id: '12345'
    },
    {
      explanation: 'open the emoji box and choose the emotion you want your post to use!',
      id: '23456'
    },
    {
      explanation: 'click to generate your ideas',
      id: '23456',
      action: 'nextStep'
    },
    {
      explanation: 'Wait for the app to generate your ideas.',
      id: '23456'
    },
    {
      explanation: 'see the great ideas we generated for you.',
      id: '23456'
    }
  ]);

  const currentStepObj = steps[ currentStep ];

  const updateGuideStep = (step: number) => {
    setCurrentStep(step);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      updateGuideStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      updateGuideStep(currentStep + 1);
      console.log('next step');
    }
  };

  const updateGuideShow = (show: boolean) => {
    setShow(show);
  };

  const completeTour = () => {
    setShow(false);
    setCurrentStep( -1 );
  };

  return (
    <GuideContext.Provider value={{ currentStepObj , currentStep, steps, show, updateGuideStep, updateGuideShow, handlePreviousStep, handleNextStep, completeTour }}>
      {children}
    </GuideContext.Provider>
  );
};

export default GuideProvider;