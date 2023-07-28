'use client'
import React, { useContext, useEffect } from 'react'
import { GuideContext } from './context'


const GuideTour = () => {

  const { show, steps, currentStep, handlePreviousStep, handleNextStep, completeTour } = useContext(GuideContext);

  // Get the current step object
  const currentStepObject = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <>
      { !show && 
          <>
              <div className="fixed inset-0 bg-red-500 bg-opacity-30 flex items-center justify-center z-40"> </div>
              <div className="fixed bottom-3 right-3 p-8 bg-gray-800 text-white z-50 rounded-md w-96">
                  { currentStep >= 0 ? ( // Show welcome message on step 0 and step explanations for other steps
                    <div className="mb-4">
                      <h2 className="text-xl font-bold">
                        {currentStepObject.title}
                      </h2>
                      <p>
                        {currentStepObject.explanation}
                      </p>
                    </div>
                  ) : null}

                  <div className="flex justify-between">
                    { !isFirstStep && !isLastStep ? ( // Show back button only from step 1 onwards
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2" onClick={handlePreviousStep}>
                        Previous
                      </button>
                    ) : <div> </div> }

                    {!isLastStep ? ( // Show "Next" button only if it's not the last step
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleNextStep}>
                        Next
                      </button>
                    ) : <div> </div> }

                    { isLastStep && 
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={ completeTour }>
                            Finish
                      </button>
                    }
                  </div>
              </div>
          </>
      }
    </>
  );
};

export default GuideTour;