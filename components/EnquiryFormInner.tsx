import React, { useState } from 'react';

interface Props {
  onSuccess?: () => void;
  title?: string;
}

const EnquiryFormInner: React.FC<Props> = ({ onSuccess, title = "Get Free Counselling" }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState('Bangalore');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep(2);
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted! Our academic counselor will contact you shortly.");
    if (onSuccess) onSuccess();
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 w-full">
      <div className="mb-8">
        <h3 className="text-[1.75rem] font-bold text-[#004A99] leading-tight mb-2">{title}</h3>
        <p className="text-slate-500 font-medium text-base">Start your journey today</p>
      </div>

      <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-6">
        {step === 1 ? (
          /* Step 1: Phone Number */
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <label className="block text-sm font-bold text-[#1D2147] mb-3">Phone Number</label>
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#004A99] focus-within:border-transparent transition-all h-[58px]">
              <div className="px-4 bg-slate-50 text-slate-500 font-medium border-r border-slate-200 h-full flex items-center">
                +91
              </div>
              <input 
                type="tel" 
                required 
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="98765 43210" 
                className="flex-1 px-4 h-full bg-white text-slate-800 placeholder:text-slate-300 focus:outline-none font-medium text-lg tracking-wider" 
              />
            </div>
          </div>
        ) : (
          /* Step 2: Rest of the details */
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="block text-sm font-bold text-[#1D2147] mb-2">Full Name</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" 
                className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition-all font-medium" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1D2147] mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
                className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition-all font-medium" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1D2147] mb-2">Select Campus</label>
              <select 
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition-all bg-white font-medium"
              >
                <option>Bangalore</option>
                <option>Coimbatore</option>
              </select>
            </div>
          </div>
        )}

        <button 
          type="submit" 
          className="w-full py-5 bg-[#FFD200] text-[#004A99] rounded-xl font-black text-xl hover:bg-[#e6bd00] transition-all shadow-lg active:scale-[0.98] mt-4"
        >
          {step === 1 ? 'Next' : 'Submit Application'}
        </button>

        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your data is safe with us
        </div>
      </form>
    </div>
  );
};

export default EnquiryFormInner;