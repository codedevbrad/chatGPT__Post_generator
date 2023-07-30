import React, { useState, ReactNode, useContext } from 'react'
import { GuideContext } from './context'

interface GuideProps {
  children: ReactNode,
  stepInGuide: number
}

const Guide: React.FC<GuideProps> = ({ children , stepInGuide = -1 }) => {
  const [ showBackdrop, setShowBackdrop ] = useState<boolean>(true);
  const { handleNextStep, currentStepObj , currentStep } = useContext( GuideContext );

  const action = ( ) => {
    if ( currentStepObj.action == 'nextStep' ) {
      handleNextStep();
    } 
    else if (  !currentStepObj.action ) {

    }
  }

  return (
    <div onClick={ action }>
      { showBackdrop && stepInGuide == ( currentStep + 1 ) ? (
        <>
            <div className='z-50 bg-white relative border-2 border-black shadow-2xl rounded-sm p-2'>
              {children} 
            </div>
        </>
      
      ) : (
        <>
          {children} 
        </>
      )}
    </div>
  );
};

export default Guide;