import React from 'react';

const RECRUITERS = [
  { name: 'Deloitte', color: '#86BC25' },
  { name: 'KPMG', color: '#00338D' },
  { name: 'PwC', color: '#D0441E' },
  { name: 'EY', color: '#FFE600' },
  { name: 'Grant Thornton', color: '#5B2D82' },
  { name: 'BDO', color: '#ED1C24' },
  { name: 'Accenture', color: '#A100FF' },
  { name: 'Goldman Sachs', color: '#7399C6' },
  { name: 'J.P. Morgan', color: '#2C2A29' },
  { name: 'Barclays', color: '#00AEEF' },
  { name: 'Amazon', color: '#232F3E' },
  { name: 'Google', color: '#4285F4' },
  { name: 'Standard Chartered', color: '#009530' },
  { name: 'HSBC', color: '#DB0011' },
  { name: 'Genpact', color: '#FF4F00' },
  { name: 'Wipro', color: '#000000' },
];

const Recruiters: React.FC = () => {
  // Triple the array to ensure no gaps even on huge screens for the marquee
  const duplicatedRecruiters = [...RECRUITERS, ...RECRUITERS, ...RECRUITERS];

  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#1D2147] mb-4 tracking-tight">
            Our Top <span className="text-[#004A99]">Recruiters</span>
          </h2>
          <div className="w-16 h-1 bg-[#FFD200] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-lg">
            Land careers at the world's leading professional firms and financial institutions.
          </p>
        </div>
      </div>

      {/* Moving Marquee Section - High Performance CSS Animation */}
      <div className="relative py-8 border-y border-slate-100 bg-slate-50/50">
        <div className="flex animate-marquee">
          {duplicatedRecruiters.map((company, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center justify-center mx-4 md:mx-8 group"
            >
              <div className="bg-white px-6 py-4 md:px-8 md:py-5 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[#004A99] group-hover:-translate-y-1 w-36 h-20 md:w-48 md:h-24 flex items-center justify-center">
                <span 
                  className="font-black text-lg md:text-xl tracking-tighter transition-colors duration-300 grayscale group-hover:grayscale-0"
                  style={{ color: company.color }}
                >
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Recruiters;