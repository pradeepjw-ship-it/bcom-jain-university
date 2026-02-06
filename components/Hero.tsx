import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const Hero: React.FC<Props> = ({ onCtaClick }) => {
  const scrollToSyllabus = () => {
    const element = document.getElementById('syllabus');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const accreditations = [
    {
      title: "NAAC Ratings",
      sub: "A++ grade rating with a CGPA of 3.71",
      img: "https://www.jainuniversity.ac.in/images/naac-a-logo.png",
      alt: "NAAC A++"
    },
    {
      title: "QS World Rankings",
      sub: "Ranked 91-95 among top Indian Universities",
      img: "https://www.jainuniversity.ac.in/images/qs-logo.png", // Placeholder or text
      alt: "QS Ranking"
    },
    {
      title: "KSURF Ratings",
      sub: "Awarded 5 Stars in Young Universities",
      img: "https://www.jainuniversity.ac.in/images/ksurf-logo.png",
      alt: "KSURF"
    },
    {
      title: "NIRF Ranking",
      sub: "Ranked 65th in India",
      img: "https://www.jainuniversity.ac.in/images/nirf-logo.png",
      alt: "NIRF"
    }
  ];

  return (
    <section id="overview" className="bg-[#004A99] pt-12 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-white pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD200]/20 border border-[#FFD200] text-[#FFD200] text-[11px] font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] animate-pulse"></span>
              Admissions Open 2026
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Premier <span className="text-[#FFD200]">B.Com Degree</span> for Future Leaders
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed opacity-90">
              Launch your career in Finance & Accounting with Jain University's industry-integrated Bachelor of Commerce. <span className="font-semibold text-white">Your gateway to CA, ACCA & CMA.</span>
            </p>
            
            {/* Urgency Widget */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl mb-8 max-w-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-[#FFD200] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  High Demand
                </span>
                <span className="text-sm font-bold text-white">87% Seats Filled</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2.5 overflow-hidden">
                <div className="bg-[#FFD200] h-2.5 rounded-full w-[87%] relative">
                   <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onCtaClick}
                className="px-8 py-4 bg-[#FFD200] text-[#004A99] rounded-xl font-black text-lg shadow-lg hover:bg-[#e6bd00] hover:-translate-y-1 transition-all"
              >
                Apply Now
              </button>
              <button 
                onClick={scrollToSyllabus}
                className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all"
              >
                View Syllabus
              </button>
            </div>
            <div className="mt-4 text-xs text-blue-200 font-medium">
              * Applications reviewed on a rolling basis
            </div>
          </div>

          {/* Right Content - Accreditation Grid */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-2xl">
              <h3 className="text-center text-[#004A99] font-bold text-lg mb-6 uppercase tracking-widest">
                University Recognitions
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {accreditations.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    {/* Circle Image Container */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#D4AF37] p-1 flex items-center justify-center mb-3 bg-white shadow-sm group hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center p-2">
                        <img 
                          src={item.img} 
                          alt={item.alt}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                             e.currentTarget.style.display = 'none';
                             e.currentTarget.parentElement!.innerHTML = `<span class="text-[#004A99] font-black text-xs leading-tight">${item.alt}</span>`;
                          }}
                        />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#004A99] text-sm leading-tight">"{item.title}"</h4>
                      <p className="text-slate-500 text-[10px] sm:text-xs font-medium leading-tight max-w-[140px]">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Hero;