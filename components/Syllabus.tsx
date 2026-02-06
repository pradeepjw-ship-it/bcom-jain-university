import React, { useState } from 'react';
import { SYLLABUS_DATA } from '../constants';

interface Props {
  onCtaClick: () => void;
}

const Syllabus: React.FC<Props> = ({ onCtaClick }) => {
  const [activeSem, setActiveSem] = useState(1);

  return (
    <section id="syllabus" className="py-12 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1D2147] mb-2">Detailed Curriculum</h2>
          <p className="text-slate-600 text-sm md:text-base">Explore the industry-aligned subjects semester by semester.</p>
        </div>

        {/* Desktop View: Sidebar Tabs + Content Panel */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {/* Tab Selector */}
          <div className="flex flex-col gap-2">
            {SYLLABUS_DATA.map((sem) => (
              <button
                key={sem.semester}
                onClick={() => setActiveSem(sem.semester)}
                className={`p-4 rounded-xl transition-all border whitespace-nowrap text-sm font-bold text-left flex items-center justify-between group ${
                  activeSem === sem.semester
                    ? 'bg-[#004A99] text-white border-[#004A99] shadow-md scale-105'
                    : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100'
                }`}
              >
                <span>Semester {sem.semester}</span>
                <span className={`transition-transform duration-300 ${activeSem === sem.semester ? 'text-white translate-x-1' : 'text-slate-300'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          {/* Subject Display */}
          <div className="col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm h-full">
            <h3 className="text-xl font-bold text-[#1D2147] mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#FFD200] rounded-full"></span>
              Subjects Covered in Semester {activeSem}
            </h3>
            <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {SYLLABUS_DATA.find(s => s.semester === activeSem)?.subjects.map((subject, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#004A99] text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">{subject}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Accordion */}
        <div className="lg:hidden space-y-3 mb-10">
          {SYLLABUS_DATA.map((sem) => (
            <div key={sem.semester} className={`rounded-xl border overflow-hidden transition-all duration-300 ${activeSem === sem.semester ? 'border-[#004A99] shadow-md bg-white' : 'border-slate-200 bg-slate-50'}`}>
              <button
                onClick={() => setActiveSem(activeSem === sem.semester ? 0 : sem.semester)}
                className={`w-full p-4 flex items-center justify-between font-bold text-sm ${activeSem === sem.semester ? 'bg-[#004A99] text-white' : 'text-[#1D2147]'}`}
              >
                <span>Semester {sem.semester}</span>
                <span className={`transform transition-transform duration-300 ${activeSem === sem.semester ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${activeSem === sem.semester ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="p-4 bg-white">
                    <ul className="space-y-3">
                      {sem.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="min-w-[24px] h-6 rounded-full bg-blue-100 text-[#004A99] text-[10px] font-bold flex items-center justify-center mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-tight pt-0.5">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated CTA Section */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1D2147] shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#004A99] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
           <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Want the full picture?</h3>
                <p className="text-blue-100 text-sm md:text-base max-w-lg">
                  Download the comprehensive brochure with detailed credit structure, elective options, and faculty profiles.
                </p>
              </div>
              <button 
                onClick={onCtaClick}
                className="whitespace-nowrap px-8 py-4 bg-[#FFD200] text-[#004A99] rounded-xl font-bold text-base shadow-lg hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Detailed Syllabus
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;