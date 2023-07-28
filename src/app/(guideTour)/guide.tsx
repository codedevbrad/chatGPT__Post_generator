import React, { useState, ReactNode, useContext } from 'react'
import { GuideContext } from './context'

interface GuideProps {
  children: ReactNode,
  stepInGuide: number
}

const Guide: React.FC<GuideProps> = ({ children , stepInGuide = -1 }) => {
  const [showBackdrop, setShowBackdrop] = useState<boolean>(true);
  const { currentStep } = useContext( GuideContext );

  return (
    <>
      { showBackdrop && stepInGuide == currentStep ? (
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
    </>
  );
};

export default Guide;
