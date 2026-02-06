import React from 'react';
import { CAREER_PATHS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Year 1', salary: 4.5 },
  { name: 'Year 2', salary: 5.8 },
  { name: 'Year 3', salary: 7.5 },
  { name: 'Year 4', salary: 9.8 },
  { name: 'Year 5', salary: 12.5 },
];

const CareerPath: React.FC = () => {
  return (
    <section id="careers" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFD200]/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#1D2147] mb-4">
            Unlock Diverse <span className="text-[#004A99]">Career Horizons</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A B.Com degree isn't just about accounting. It's your launchpad into the high-growth worlds of Finance, Analytics, and Corporate Management.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Career Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {CAREER_PATHS.map((role, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
                    {role.salary}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1D2147] mb-2">{role.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {role.description}
                </p>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#004A99] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Salary Growth Chart & Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Chart Widget */}
            <div className="bg-[#1D2147] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#004A99] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">Salary Growth Trajectory</h3>
                <p className="text-blue-200 text-xs mb-6">Average progression over 5 years for B.Com graduates</p>
                
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFD200" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#FFD200" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 10}} 
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 10}} 
                        tickFormatter={(value) => `${value}L`}
                      />
                      <Tooltip 
                        contentStyle={{borderRadius: '8px', border: 'none', backgroundColor: '#fff', color: '#000', fontSize: '12px', fontWeight: 'bold'}}
                        itemStyle={{color: '#004A99'}}
                        formatter={(value) => [`₹${value} LPA`, 'Avg. Salary']}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="salary" 
                        stroke="#FFD200" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorSalary)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Quick Stat Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1D2147]">175%</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Avg. Hike in 5 Years</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerPath;