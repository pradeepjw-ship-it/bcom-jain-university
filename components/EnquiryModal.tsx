
import React from 'react';
import EnquiryFormInner from './EnquiryFormInner';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg animate-in zoom-in-95 fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#FFD200] transition-colors p-2 focus:outline-none"
          aria-label="Close Modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <EnquiryFormInner onSuccess={onClose} title="Register Your Interest" />
      </div>
    </div>
  );
};

export default EnquiryModal;
