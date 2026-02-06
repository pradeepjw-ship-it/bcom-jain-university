import React, { useState } from 'react';

const Header: React.FC = () => {
  const [lakshyaError, setLakshyaError] = useState(false);
  const [jainError, setJainError] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex items-center gap-2 sm:gap-6">
            {/* IIC Lakshya Logo Section */}
            <div className="h-12 sm:h-16 flex items-center">
              {!lakshyaError ? (
                <img 
                  src="https://www.iiclakshya.com/images/logo.png" 
                  alt="IIC Lakshya" 
                  className="h-full w-auto object-contain"
                  onError={() => setLakshyaError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#004A99] rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-xs">L</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[8px] font-bold text-slate-500 tracking-tighter uppercase">Indian Institute of Commerce</span>
                    <span className="text-lg font-black text-[#004A99] tracking-tight">Lakshya</span>
                  </div>
                </div>
              )}
            </div>

            {/* Branding Separator */}
            <div className="h-10 w-px bg-slate-200 mx-1 sm:mx-0"></div>

            {/* Jain University Logo Section */}
            <div className="h-10 sm:h-14 flex items-center">
              {!jainError ? (
                <img 
                  src="https://www.jainuniversity.ac.in/images/logo.png" 
                  alt="Jain University" 
                  className="h-full w-auto object-contain"
                  onError={() => setJainError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#002B5B] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                    JGi
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-black text-slate-900 tracking-tighter">JAIN</span>
                    <span className="text-[6px] font-bold text-slate-500 uppercase tracking-tighter">Deemed-to-be University</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;