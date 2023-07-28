'use client'
import React, { createContext, useState, ReactNode } from 'react'

interface Step {
  title: string;
  explanation: string;
  id: string;
}

interface GuideContextType {
  currentStep: number;
  steps: Step[];
  show: boolean;
  updateGuideStep: (step: number) => void;
  updateGuideShow: (show: boolean) => void;
  handlePreviousStep: (show: number) => void;
  handleNextStep: (show: number) => void;
  completeTour: (show: boolean) => void;
}


export const GuideContext = createContext<GuideContextType>({
  currentStep: 0,
  steps: [],
  show: false,
  updateGuideStep: () => {},
  updateGuideShow: () => {},
  handlePreviousStep: () => {},
  handleNextStep: () => {},
  completeTour: () => {}
});


interface GuideProviderProps {
  children: ReactNode;
}


const GuideProvider: React.FC<GuideProviderProps> = ({ children }) => {
  const [ currentStep, setCurrentStep ] = useState(0);
  const [ show, setShow ] = useState(false);

  const [ steps , updateSteps ] = useState([
    {
      title: 'Need a tour?',
      explanation: 'see the steps needed to ge',
      id: '12345'
    },
    {
      title: 'Step 1',
      explanation: 'Explanation for Step 1',
      id: '12345'
    },
    {
      title: 'Step 2',
      explanation: 'Explanation for Step 2',
      id: '23456'
    },
    {
      title: 'All done',
      explanation: 'Youre all set to start generating posts.',
      id: '23456'
    }
  ]);

  const setWelcomeTour = ( welcomeObj: object ) => {

  };

  const updateGuideStep = (step: number) => {
    if (step >= 0 && step <= steps.length - 1) {
      setCurrentStep(step);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      updateGuideStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      updateGuideStep(currentStep + 1);
    }
  };

  const updateGuideShow = (show: boolean) => {
    setShow(show);
  };

  const completeTour = (show: boolean) => {
    setShow(false);
  };

  return (
    <GuideContext.Provider value={{ currentStep, steps, show, updateGuideStep, updateGuideShow, handlePreviousStep, handleNextStep, completeTour }}>
      {children}
    </GuideContext.Provider>
  );
};

export default GuideProvider;