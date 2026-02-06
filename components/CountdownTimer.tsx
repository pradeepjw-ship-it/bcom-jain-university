import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Target: The upcoming Sunday at 23:59:59
      const nextSunday = new Date();
      const currentDay = now.getDay(); // 0 (Sun) to 6 (Sat)
      
      // Calculate days until next Sunday
      // If today is Sunday (0), daysToAdd is 0 to target the end of today
      const daysToAdd = (7 - currentDay) % 7;
      
      nextSunday.setDate(now.getDate() + daysToAdd);
      nextSunday.setHours(23, 59, 59, 999);

      const difference = nextSunday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-lg">
        <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
          {formatNumber(value)}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-blue-200 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <div className="mt-12 lg:mt-16 flex flex-col items-center lg:items-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-white/80 font-bold text-sm sm:text-base tracking-wide">
          Applications closing for this batch in:
        </h4>
      </div>
      
      <div className="flex gap-3 sm:gap-5">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;