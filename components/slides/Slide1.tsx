import React from 'react';
import ConversionChart from '../charts/ConversionChart';
import AnomalyChart from '../charts/AnomalyChart';

const Slide1: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-6 lg:p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Slide 1 / The Crisis</h2>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Structural Flaw & <span className="text-red-600">Data Corruption.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 h-full min-h-0">
        {/* Column 1: The Bottleneck */}
        <div className="flex flex-col h-full min-h-0">
          <div className="mb-4 flex-shrink-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1">The Revenue Leak</h3>
            <p className="text-base text-gray-500 font-medium">
              Leads are dying at assignment.
            </p>
          </div>
          
          <div className="mb-4 flex-shrink-0">
             <div className="flex items-baseline">
                <span className="text-6xl font-black text-red-600 tracking-tighter mr-3">39.1%</span>
                <span className="text-lg font-bold text-gray-900">Lost</span>
             </div>
             <p className="text-xs font-mono text-gray-400 mt-1">
               p {'<<'} 0.05 (Significant)
             </p>
          </div>

          <div className="flex-grow min-h-[250px] w-full">
             <ConversionChart />
          </div>
        </div>

        {/* Column 2: Data Contamination */}
        <div className="flex flex-col h-full min-h-0 md:pl-8 border-l-0 md:border-l border-gray-100">
          <div className="mb-4 flex-shrink-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Data Blindness</h3>
            <p className="text-base text-gray-500 font-medium">
              Daily metrics are statistically unstable.
            </p>
          </div>

           <div className="mb-4 flex-shrink-0">
             <div className="text-4xl font-black text-blue-600 tracking-tight leading-none mb-1">
               Accepted &gt; Created
             </div>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
               Anomaly Detected
             </p>
          </div>

          <div className="flex-grow min-h-[250px] w-full">
              <AnomalyChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;