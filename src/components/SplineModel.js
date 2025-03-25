import React, { useEffect } from 'react';

const SplineModel = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="spline-container">
      <spline-viewer 
        url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode" 
        background="rgba(218,81,221,0.2)"
      />
    </div>
  );
};

export default SplineModel;