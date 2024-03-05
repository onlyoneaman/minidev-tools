import React, { useState, useEffect } from 'react';

const ViewportChecker = () => {
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="p-12 md:p-16 flex flex-col items-center justify-center"
    >
      <p>
        Viewport Size: {viewportSize.width} X {viewportSize.height} px
      </p>
    </div>
  );
};

export default ViewportChecker;
