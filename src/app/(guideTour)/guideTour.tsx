'use client'
import React, { useContext , useState } from 'react'
import { GuideContext }  from './context'

const GuideTour = ({ welcome }) => {

  const { show, steps, currentStep, handlePreviousStep, handleNextStep, completeTour } = useContext(GuideContext);

  // Get the current step object
  const currentStepObject = steps[currentStep];

  const stepsAmount = steps.length - 1;
  const isWelcomeStep = currentStep === -1;

  const stepCurrentPlain = currentStep + 1;
  const stepsAmountPlain = steps.length;

  const shouldShowComplete = currentStep === stepsAmount;
  const isBeforeLastStep = currentStep < steps.length - 1;
  
  const isInSteps = currentStep >= 0 && currentStep < steps.length;
  const isComplete = currentStep === steps.length;
  const prevAllowedAfterFirstAndBeforeLast = currentStep > 0 && currentStep < steps.length;


  const clickToCompleteTour = ( ) => {
    completeTour();
  }

  return (
    <>
      { !show && 
          <> 
              <div className="fixed inset-0 bg-red-500 bg-opacity-30 flex items-center justify-center z-40"> </div>

              <div className="fixed bottom-3 right-3 p-8 bg-gray-800 text-white z-50 rounded-md w-96">

                  { currentStep < 0 &&
                      <div className="mb-4">
                        <h2 className="text-xl font-bold">
                          Need a tour?
                        </h2>
                        <p>
                          lorem isum to de tato.
                        </p>
                      </div>
                  }

                  { isInSteps ? ( // Show welcome message on step 0 and step explanations for other steps
                      <div className="mb-4">
                        <h2 className="text-xl font-bold">
                          steps { stepCurrentPlain } of { stepsAmountPlain }
                        </h2>
                        <p>
                          {currentStepObject.explanation}
                        </p>
                      </div>
                  ) : null }

                  { isComplete ? (
                      <div className="mb-4">
                        <h2 className="text-xl font-bold">
                          completed.
                        </h2>
                        <p>
                          well done.
                        </p>
                      </div>
                  ) : null }
                   

                  <div className="flex justify-between">
                    { prevAllowedAfterFirstAndBeforeLast ? ( // Show back button only from step 1 onwards
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2" onClick={handlePreviousStep}>
                        Previous
                      </button>
                    ) : <div> </div> }

                    { isWelcomeStep || isBeforeLastStep ? ( // Show "Next" button only if it's not the last step
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleNextStep}>
                        Next
                      </button>
                    ) : <div> </div> }

                    { shouldShowComplete && 
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={ clickToCompleteTour }>
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