import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const MobileStickyCTA: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[150] bg-white border-t border-slate-200 px-4 py-3 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)] flex gap-3 animate-in slide-in-from-bottom-full duration-500">
      <button 
        onClick={onCtaClick}
        className="flex-1 py-2.5 px-1 border-2 border-[#004A99] text-[#004A99] rounded-xl flex flex-col items-center justify-center active:bg-slate-50 transition-colors"
      >
        <span className="text-[13px] font-extrabold leading-tight">Download Brochure</span>
        <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Get Syllabus PDF</span>
      </button>
      <button 
        onClick={onCtaClick}
        className="flex-1 py-2.5 px-1 bg-[#FFD200] text-[#004A99] rounded-xl flex flex-col items-center justify-center shadow-lg active:scale-95 transition-all"
      >
        <span className="text-[13px] font-extrabold leading-tight">Get Free Counselling</span>
        <span className="text-[10px] font-semibold text-[#1D2147] mt-0.5 opacity-90">Speak to Expert</span>
      </button>
    </div>
  );
};

export default MobileStickyCTA;