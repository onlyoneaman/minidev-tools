import React, { useState, useEffect } from 'react';

const DayClock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12">
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="text-4xl font-normal text-gray-800">
          {formatDate(currentDate)}
        </div>
        <div className="text-6xl font-bold text-gray-800">
          {formatTime(currentDate)}
        </div>
      </div>
    </div>
  );
};

export default DayClock;
