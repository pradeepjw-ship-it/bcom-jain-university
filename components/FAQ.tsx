import React, { useState } from 'react';

const faqs = [
  {
    q: "Which university awards the B.Com degree?",
    a: "The degree is awarded by Jain (Deemed-to-be University), which is a NAAC A++ accredited and UGC-recognized institution."
  },
  {
    q: "What is the duration of the program?",
    a: "It is a standard 3-year full-time undergraduate program, spread across 6 semesters as per the university curriculum."
  },
  {
    q: "What is the role of IIC Lakshya in this program?",
    a: "IIC Lakshya is the official training partner for Jain University. We provide industry-centric skill training, corporate readiness modules, and placement support alongside the university's academic curriculum."
  },
  {
    q: "What are the eligibility criteria for admission?",
    a: "Applicants must have completed 10+2 or its equivalent from a recognized board (CBSE, ISC, State Board, etc.) with a minimum aggregate percentage, typically 50% or above."
  },
  {
    q: "Is there any entrance test for admission?",
    a: "Admission is primarily based on academic merit in the 10+2 examinations followed by a screening process conducted by the university and Lakshya panel."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#1D2147] mb-12 uppercase tracking-wide">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                <span className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIdx === idx && (
                <div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-2 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;