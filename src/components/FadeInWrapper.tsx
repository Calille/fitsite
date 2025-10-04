'use client';

import { ReactNode } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
}

const FadeInWrapper = ({ children }: FadeInWrapperProps) => {
  // For static export, just return the children with immediate visibility
  // and a simple CSS animation
  return (
    <div 
      className="fade-in-wrapper"
      style={{ 
        opacity: 1,
        animation: 'fadeIn 0.3s ease-in-out'
      }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in-wrapper {
          opacity: 1 !important;
        }
      `}</style>
      {children}
    </div>
  );
};

export default FadeInWrapper; 