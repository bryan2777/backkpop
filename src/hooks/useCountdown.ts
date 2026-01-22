import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdown = (initialHours: number = 23, initialMinutes: number = 47) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    const total = 0 * 3600 + 5 * 60 + 0; // 5 minutes
    return {
      hours: Math.floor(total / 3600),
      minutes: Math.floor((total % 3600) / 60),
      seconds: total % 60,
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        
        if (totalSeconds <= 0) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const newTotal = totalSeconds - 1;
        return {
          hours: Math.floor(newTotal / 3600),
          minutes: Math.floor((newTotal % 3600) / 60),
          seconds: newTotal % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
  };

  return {
    hours: formatTime(timeLeft.hours),
    minutes: formatTime(timeLeft.minutes),
    seconds: formatTime(timeLeft.seconds),
  };
};