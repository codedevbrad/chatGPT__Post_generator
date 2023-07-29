import React, { useState, ReactNode, useContext } from 'react'
import { GuideContext } from './context'

interface GuideProps {
  children: ReactNode,
  stepInGuide: number
}

const Guide: React.FC<GuideProps> = ({ children , stepInGuide = -1 }) => {
  const [ showBackdrop, setShowBackdrop ] = useState<boolean>(true);
  const { currentStepObj , currentStep } = useContext( GuideContext );

  const action = ( ) => {
    if ( currentStepObj.action ) {
      currentStepObj.action()
    }
  }

  return (
    <>
      { showBackdrop && stepInGuide == ( currentStep + 1 ) ? (
        <>
            <div className='z-50 bg-white relative border-2 border-black shadow-2xl rounded-sm p-2' onClick={ action }>
              {children} 
            </div>
        </>
      
      ) : (
        <>
          {children} 
        </>
      )}
    </>
  );
};

export default Guide;