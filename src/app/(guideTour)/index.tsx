import React, { useState, ReactNode } from 'react';

interface GuideProps {
  children: ReactNode;
}

const Guide: React.FC<GuideProps> = ({ children }) => {
  const [showBackdrop, setShowBackdrop] = useState<boolean>(true);

  return (
    <>
      {showBackdrop && (
        <div className="fixed inset-0 bg-red-500 bg-opacity-30 flex items-center justify-center z-40" />
      )}

      <>
        {!showBackdrop ? (
          <>
            {children}
          </>
        ) : (
          <div className='z-50 bg-white relative border-2 border-black shadow-2xl rounded-sm p-2'>
            {children}
          </div>
        )}
      </>
    </>
  );
};

export default Guide;
