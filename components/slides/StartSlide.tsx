import React from 'react';

const StartSlide: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center p-10 max-w-7xl mx-auto w-full text-center">
      
      <div className="mb-8">
        <h2 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">
          Excitel Strategy Audit
        </h2>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight tracking-tight mb-6">
          The Velocity <br/>
          <span className="text-blue-600">Reset.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Why funding friction is costing you 
          <span className="text-gray-900 font-bold mx-2">Double CAC</span> 
          and how to fix it.
        </p>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <p className="text-xs font-mono text-gray-300">Press Arrow Key to Begin</p>
      </div>
    </div>
  );
};

export default StartSlide;