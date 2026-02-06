import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const BrochureCTA: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1D2147] rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center md:text-left flex-1">
            <div className="inline-block px-4 py-1.5 bg-[#FFD200] text-[#1D2147] text-[10px] font-black rounded-full uppercase tracking-widest mb-3">
              Detailed Guide
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Get the Full Course Details
            </h2>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button 
              onClick={onCtaClick}
              className="w-full md:w-auto px-8 py-4 bg-white text-[#1D2147] rounded-2xl font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 group"
            >
              <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Download Detailed Syllabus</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureCTA;