import React from 'react';

const features = [
  {
    title: "UGC Recognized Degree",
    description: "Earn a legitimate Bachelor of Commerce degree from Jain (Deemed-to-be University), recognized globally.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "NAAC A++ University",
    description: "Jain University's prestigious accreditation ensures top-tier academic quality and infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Professional Integration",
    description: "Gain easy access to merge your degree with premier professional courses. Effortlessly transition into integrated pathways like B.Com + ACCA, CA, and CMA through Lakshya’s specialized ecosystem.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Industry-Centric Syllabus",
    description: "Curriculum designed to meet modern corporate standards, including GST, Corporate Accounting, and Business Ethics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Premier Placement Cell",
    description: "Leverage Jain University's robust placement network with over 190+ MNCs recruiting regularly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  }
];

const GlobalEdge: React.FC = () => {
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-[#1D2147] mb-4">
            The <span className="text-[#004A99]">Lakshya & Jain</span> Advantage
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-[#FFD200] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Combining university academic excellence with IIC Lakshya's professional skill-building heritage.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory no-scrollbar">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[85%] sm:w-80 lg:w-auto snap-center p-6 lg:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#FFD200] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#004A99] mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1D2147] mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default GlobalEdge;