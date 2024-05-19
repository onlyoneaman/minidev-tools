import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current!);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12">
      <div className="p-8 rounded-lg bg-white space-y-4">
        <div className="flex items-center justify-center">
          <div
            className="text-6xl font-bold text-gray-800 inline-flex min-w-[210px] mx-auto"
          >
            <span>{formatTime(time)}</span>
            <span className="text-3xl ml-2">{Math.floor((time % 1000) / 10)
              .toString()
              .padStart(2, '0')}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
              isRunning
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            onClick={isRunning ? stopStopwatch : startStopwatch}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            className="px-4 py-2 rounded-md bg-gray-500 text-white font-semibold hover:bg-gray-600 transition-colors duration-300"
            onClick={resetStopwatch}
            disabled={time === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
