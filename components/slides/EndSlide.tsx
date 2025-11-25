import React from 'react';

const EndSlide: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center p-10 max-w-7xl mx-auto w-full text-center">
      
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
          Move to <span className="text-red-600">Action.</span>
        </h1>
        
        <p className="text-xl text-gray-500 font-medium">
          The bottleneck is identified. The model is ready.
        </p>
      </div>

      <div className="mt-20">
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-8"></div>
        <h2 className="text-sm font-black uppercase tracking-[0.3em]">
          <span className="text-blue-600">Osama</span> <span className="text-red-600">Consultants</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2 font-mono">
          Strategy & Analytics
        </p>
      </div>
    </div>
  );
};

export default EndSlide;