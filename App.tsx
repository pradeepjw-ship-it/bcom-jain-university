import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Syllabus from './components/Syllabus';
import CareerPath from './components/CareerPath';
import FAQ from './components/FAQ';
import EnquiryForm from './components/EnquiryForm';
import CounselorChat from './components/CounselorChat';
import Footer from './components/Footer';
import Recruiters from './components/Recruiters';
import GlobalEdge from './components/GlobalEdge';
import EnquiryModal from './components/EnquiryModal';
import MobileStickyCTA from './components/MobileStickyCTA';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Register Your Interest");

  const openModal = (title: string = "Register Your Interest") => {
    setModalTitle(title);
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  const stats = [
    {
      value: "700+",
      label: "Faculty Experts",
      icon: "👨‍🏫"
    },
    {
      value: "Top 100",
      label: "University Rank",
      icon: "🏆"
    },
    {
      value: "35k+",
      label: "Active Students",
      icon: "🎓"
    },
    {
      value: "1.2L+",
      label: "Alumni Network",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 pb-20 md:pb-0 font-inter">
      <Header />
      <main>
        <Hero onCtaClick={() => openModal("Apply for 2026 Batch")} />
        
        {/* Improved Stats Section - Distinct from Hero */}
        <section className="relative z-20 -mt-8 mx-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <span className="text-3xl lg:text-4xl font-black text-[#004A99] tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GlobalEdge />
        <Syllabus onCtaClick={() => openModal("Download Detailed Syllabus")} />
        <Recruiters />
        <CareerPath />
        <FAQ />
        <EnquiryForm onCtaClick={() => openModal("Start Your Application")} />
      </main>
      
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} />
      <MobileStickyCTA 
        onDownload={() => openModal("Download Brochure")}
        onCounselling={() => openModal("Get Free Counselling")}
      />
      <CounselorChat />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

export default App;