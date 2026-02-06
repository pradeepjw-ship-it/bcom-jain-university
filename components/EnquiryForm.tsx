import React from 'react';
import CountdownTimer from './CountdownTimer';

interface Props {
  onCtaClick: () => void;
}

const EnquiryForm: React.FC<Props> = ({ onCtaClick }) => {
  const benefits = [
    { text: "Personalized Academic Mentorship", icon: "👨‍🏫" },
    { text: "Advanced Learning Centers", icon: "🏢" },
    { text: "Corporate Readiness Programs", icon: "🚀" },
    { text: "World-Class Campus Facilities", icon: "🏛️" }
  ];

  return (
    <section id="enquiry-section" className="py-20 lg:py-28 bg-[#004A99] overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003d7e] to-[#004A99]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD200]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-3/5 text-white">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              Limited Seats Available
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Ready to Secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Your Future?</span>
            </h2>
            
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD200] flex items-center justify-center text-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <span className="text-sm md:text-base font-bold text-white leading-snug pt-1.5 opacity-90">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <CountdownTimer />
            </div>
          </div>

          <div className="lg:w-2/5 w-full">
            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] border border-white/20 text-center shadow-2xl relative group">
              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Applications Closing Soon</h3>
              <p className="text-blue-100 mb-8 text-sm">Don't miss the chance to join the elite cohort of 2026.</p>

              <button 
                onClick={onCtaClick}
                className="relative w-full py-6 bg-gradient-to-r from-[#FFD200] to-[#FFC400] text-[#004A99] rounded-2xl font-black text-2xl shadow-[0_20px_40px_-15px_rgba(255,210,0,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(255,210,0,0.5)] hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">APPLY NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
              </button>
              
              <p className="mt-6 text-xs text-blue-200 font-medium opacity-80">
                * No application fee required for initial enquiry
              </p>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default EnquiryForm;